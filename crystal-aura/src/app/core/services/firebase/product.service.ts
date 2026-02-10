import { Injectable, inject } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData } from '@angular/fire/firestore';
import { combineLatest, forkJoin, Observable, switchMap } from 'rxjs';
import { Product } from '../../models/product-detail.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  firestore: Firestore = inject(Firestore);

  constructor() { }

  getProductById(productId: string): Observable<Product> {
    const productRef = doc(this.firestore, `products/${productId}`);
    return docData(productRef, { idField: 'id' }) as Observable<Product>;
  }

  getFeaturedProductIds(): Observable<{productId:string}[]> {
    const colRef = collection(this.firestore, 'featuredProducts');
    return collectionData(colRef) as Observable<[{productId:string}]>;
  }

  getFeaturedProducts(): Observable<Product[]> {
    return this.getFeaturedProductIds().pipe(
      switchMap(ids => {
        const observables: Observable<Product>[] = ids.map(id => {
          const docRef = doc(this.firestore, `products/${id.productId}`);
          return docData(docRef, { idField: 'id' }) as Observable<Product>;
        });
        return combineLatest(observables);
      })
    );
  }
}
