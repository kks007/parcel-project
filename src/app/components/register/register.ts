import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class RegisterComponent {
  customerName = '';
  email = '';
  mobile = '';
  address = '';
  userId = '';
  password = '';
  confirmPassword = '';
  preferences = '';

  successMessage = '';
  errorMessage = '';
  generatedUsername = '';

  register() {
    // Clear previous messages
    this.successMessage = '';
    this.errorMessage = '';

    // Basic validation
    if (!this.customerName || !this.email || !this.mobile || !this.userId || !this.password) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.email)) {
      this.errorMessage = 'Please enter a valid email address';
      return;
    }

    // Mobile validation
    if (this.mobile.length < 10) {
      this.errorMessage = 'Please enter a valid mobile number';
      return;
    }

    this.generatedUsername = this.userId + Math.floor(Math.random() * 1000);
    this.successMessage = `Registration successful! Username: ${this.generatedUsername}`;
    
    // Auto clear success message after 5 seconds
    setTimeout(() => {
      this.successMessage = '';
    }, 5000);
  }

  resetForm() {
    this.customerName = '';
    this.email = '';
    this.mobile = '';
    this.address = '';
    this.userId = '';
    this.password = '';
    this.confirmPassword = '';
    this.preferences = '';
    this.successMessage = '';
    this.errorMessage = '';
  }
}