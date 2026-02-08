import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {

  @ViewChild('heroSection', { static: true })
  heroSection!: ElementRef<HTMLElement>;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.heroSection.nativeElement.classList.add('show');
          observer.unobserve(this.heroSection.nativeElement);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(this.heroSection.nativeElement);
  }
}
