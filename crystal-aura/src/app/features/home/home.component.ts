import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesSectionComponent } from './sections/categories/categories-section.component';
import { HeroSectionComponent } from './sections/hero/hero-section.component';
import { FeaturedCollectionsComponent } from './sections/featured-collections/featured-collections.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeroSectionComponent, CategoriesSectionComponent,FeaturedCollectionsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {}
