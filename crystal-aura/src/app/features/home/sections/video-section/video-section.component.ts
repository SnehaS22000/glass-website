import { Component, ElementRef, ViewChild, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-video-section',
    imports: [],
    templateUrl: './video-section.component.html',
    styleUrl: './video-section.component.scss'
})
export class VideoSectionComponent {
  @ViewChildren('videoPlayer') videoRef!: ElementRef<HTMLVideoElement>[];

  ngAfterViewInit() {
    this.videoRef.forEach(video => {
      video.nativeElement.muted = true;
      video.nativeElement.play();  
    });
  }
}
