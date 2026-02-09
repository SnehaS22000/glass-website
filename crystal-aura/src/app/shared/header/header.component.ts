import { Component, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
    selector: 'app-header',
    imports: [CommonModule, RouterModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() themeToggle = new EventEmitter<void>();
  showOverlay = signal(false);
  isDarkMode = signal(true);

  @HostListener('document:click')
  closeOverlay() {
    this.showOverlay.set(false);
  }

  ngOnInit() {
    // Get theme preference from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode.set(savedTheme !== 'light');
  }

  onThemeToggle() {
    this.isDarkMode.set(!this.isDarkMode());
    this.themeToggle.emit();
  }

  toggleOverlay(event: MouseEvent) {
    event.stopPropagation();
    this.showOverlay.update(flag => !flag);
  }
}
