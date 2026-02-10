import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './layouts/main-layout.component';

@Component({
    selector: 'app-root',
    imports: [CommonModule, MainLayoutComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent {
}
