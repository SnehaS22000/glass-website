import { Component, HostListener, ElementRef } from '@angular/core';

@Component({
  selector: 'app-parallax-section',
  templateUrl: './parallax-section.component.html',
  styleUrls: ['./parallax-section.component.scss']
})
export class ParallaxSectionComponent {

  constructor(private elRef: ElementRef) { }

  @HostListener('window:scroll')
  onWindowScroll() {
    const value = window.scrollY;

    const parallaximage = this.elRef.nativeElement.querySelector('parallax-image');
    const background = this.elRef.nativeElement.querySelector('background-image');

    if (parallaximage) {
      parallaximage.style.transform = `translate(${value * 0.2}px, ${value * 0.5}px)`;
    }
    if (background) {
      background.style.transform = `translate(${value * -0.1}px, ${value * 0.3}px)`;
    }
  }
}
