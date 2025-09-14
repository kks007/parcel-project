import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],  // HttpClientModule removed here
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class AppComponent {}
