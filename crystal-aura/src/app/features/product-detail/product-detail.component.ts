import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, inject } from '@angular/core'
import { ProductService } from '../../core/services/firebase/product.service';
import { effect } from '@angular/core';
import { Product } from '../../core/models/product-detail.model';


@Component({
  selector: 'app-product-detail',
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent implements OnInit {

  productService: ProductService = inject(ProductService)
  imageList = signal<string[]>([]);
  colorList = signal<string[]>([]);
  selectedImage = signal<string>('');
  selectedColor = signal<string>('');
  productDetail = signal<Product | null>(null);

  constructor() {
    effect(() => {
      const images = this.imageList();
      if (!this.selectedImage() && images.length) {
        this.selectedImage.set(images[0]);
      }
    });

    effect(() => {
      const colors = this.colorList();
      if (!this.selectedColor() && colors.length) {
        this.selectedColor.set(colors[0]);
      }
    });
  }

  ngOnInit(): void {
    this.productService.getProductById('0Zd7p2GajXqD9cjJBmXR').subscribe((product: Product) => {
      this.productDetail.set(product);
      this.imageList.set(product.imagesUrls);
      this.colorList.set(product.availableColors);
    });
  }


  onimageSelect(img: string) {
    this.selectedImage.set(img)
  }

  oncolorSelect(color: string) {
    this.selectedColor.set(color)
  }
}
