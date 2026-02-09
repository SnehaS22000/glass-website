import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingOptions, provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';

import { routes } from './app.routes';
import { provideAnimations } from '@angular/platform-browser/animations';

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

const firebaseConfig = {
  apiKey: "AIzaSyAy-LhMY2ry6TDEdXHa16h9TWJziv4VRQ4",
  authDomain: "crystal-aura-33380.firebaseapp.com",
  projectId: "crystal-aura-33380",
  storageBucket: "crystal-aura-33380.firebasestorage.app",
  messagingSenderId: "78950422793",
  appId: "1:78950422793:web:becf7d2855507c7ee01bd8"
};

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
  provideRouter(routes, withInMemoryScrolling(scrollConfig), withViewTransitions()),
  provideFirebaseApp(() => initializeApp(firebaseConfig)),
  provideAnimations()]
};
