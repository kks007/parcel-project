import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Please enter both email and password.';
      return;
    }

    this.authService.login(this.email, this.password).subscribe(
      (success) => {
        if (success) {
          const user = this.authService.getUser();
          if (user?.role === 'customer') {
            this.router.navigate(['/customer-home']);
          } else if (user?.role === 'admin') {
            this.router.navigate(['/officer-home']);
          } else {
            this.router.navigate(['/home']); // fallback route
          }
        } else {
          this.errorMessage = 'Invalid credentials. Please try again.';
        }
      },
      (error) => {
        this.errorMessage = 'Error occurred during login. Please try again.';
      }
    );
  }
}
