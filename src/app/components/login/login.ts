import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class LoginComponent {
  userid = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.errorMessage = '';

    if (!this.userid || !this.password) {
      this.errorMessage = 'Please enter both username and password.';
      return;
    }

    // 1️⃣ Check localStorage users first
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    const registeredUser = users.find(
      (u: any) => u.userId === this.userid && u.password === this.password
    );

    if (registeredUser) {
      // Login as a customer
      localStorage.setItem(
        'user',
        JSON.stringify({ userid: registeredUser.userId, role: 'customer' })
      );
      this.router.navigate(['/customer-home']);
      return;
    }

    // 2️⃣ Fall back to AuthService (hardcoded users, e.g., admin)
    const success = this.authService.login(this.userid, this.password);
    if (success) {
      const user = this.authService.getUser();
      if (user?.role === 'customer') {
        this.router.navigate(['/customer-home']);
      } else if (user?.role === 'admin') {
        this.router.navigate(['/officer-home']);
      }
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';
    }
  }
}
