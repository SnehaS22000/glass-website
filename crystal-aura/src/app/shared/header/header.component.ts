import { Component, Output, EventEmitter, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Output() themeToggle = new EventEmitter<void>();
  isDarkMode = signal(true);

  ngOnInit() {
    // Get theme preference from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme');
    this.isDarkMode.set(savedTheme !== 'light');
  }

  onThemeToggle() {
    this.isDarkMode.set(!this.isDarkMode());
    this.themeToggle.emit();
  }
}
