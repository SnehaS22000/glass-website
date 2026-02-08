import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { signal } from '@angular/core';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { HomeComponent } from '../features/home/home.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, HomeComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent implements OnInit {
  isDarkMode = signal(true);

  ngOnInit() {
    // Check if user has a saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode.set(savedTheme === 'dark');
    }
    this.applyTheme();
  }

  onThemeToggle() {
    this.isDarkMode.set(!this.isDarkMode());
    this.applyTheme();
  }

  private applyTheme() {
    if (this.isDarkMode()) {
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
    }
    localStorage.setItem('theme', this.isDarkMode() ? 'dark' : 'light');
  }
}

