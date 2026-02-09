import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent {
  open() {
    window.open('https://youtu.be/HWgItmY12n8?si=JV8-SgQ0LJTiV0uD', '_blank', 'noopener,noreferrer')
  }
}
