import 'zone.js'; 

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app';
import { routes } from './app/app.routes';
import { HomeComponent } from './app/components/home/home';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideHttpClient(),   // Add HTTP provider so HttpClient works in services
  ],
}).catch(err => console.error(err));
