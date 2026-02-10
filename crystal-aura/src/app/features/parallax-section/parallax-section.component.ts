import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-parallax-section',
  imports: [],
  templateUrl: './parallax-section.component.html',
  styleUrl: './parallax-section.component.scss'
})
export class ParallaxSectionComponent {

//  @HostListener('window:scroll', [])
// onWindowScroll() {
//   const ocean = document.getElementById('ocean');
//   if (!ocean) return;

//   const section = ocean.closest('section') as HTMLElement;
//   const rect = section.getBoundingClientRect();

//   const viewportHeight = window.innerHeight;

//   // progress: 0 → fully visible, 1 → fully hidden
//   const progress = Math.min(
//     Math.max((viewportHeight - rect.top) / rect.height, 0),
//     1
//   );

//   // hide from bottom
//   const hidePercent = progress * 100;

//   ocean.style.clipPath = `inset(0 0 ${hidePercent}% 0)`;
// }


}
