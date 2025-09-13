// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';

// @Component({
//   selector: 'app-register',
//   standalone: true,
//   imports: [FormsModule, CommonModule],
//   templateUrl: './register.html',
//   styleUrls: ['./register.css'],
// })
// export class RegisterComponent {
//   customerName = '';
//   email = '';
//   mobile = '';
//   address = '';
//   userId = '';
//   password = '';
//   confirmPassword = '';

//   successMessage = '';
//   errorMessage = '';
//   submitted = false;

//   register() {
//     this.submitted = true;
//     this.successMessage = '';
//     this.errorMessage = '';

//     // Validation
//     if (!this.customerName || !this.email || !this.mobile || !this.userId || !this.password) {
//       this.errorMessage = 'Please fill in all required fields';
//       return;
//     }
//     if (!this.isValidEmail(this.email)) {
//       this.errorMessage = 'Invalid email address';
//       return;
//     }
//     if (!this.isValidMobile(this.mobile)) {
//       this.errorMessage = 'Invalid mobile number';
//       return;
//     }
//     if (this.password.length < 6) {
//       this.errorMessage = 'Password must be at least 6 characters long';
//       return;
//     }
//     if (this.password !== this.confirmPassword) {
//       this.errorMessage = 'Passwords do not match';
//       return;
//     }

//     // Save user to localStorage
//     const userData = {
//       customerName: this.customerName,
//       email: this.email,
//       mobile: this.mobile,
//       address: this.address,
//       userId: this.userId,
//       password: this.password,
//     };

//     let users = JSON.parse(localStorage.getItem('users') || '[]');
//     const userExists = users.some((u: any) => u.userId === this.userId);

//     if (userExists) {
//       this.errorMessage = 'User ID already exists, please choose another';
//       return;
//     }

//     users.push(userData);
//     localStorage.setItem('users', JSON.stringify(users));

//     this.successMessage = 'Registration successful! You can now login.';
//     this.resetForm();

//     // Auto clear success message
//     setTimeout(() => {
//       this.successMessage = '';
//     }, 5000);
//   }

//   resetForm() {
//     this.customerName = '';
//     this.email = '';
//     this.mobile = '';
//     this.address = '';
//     this.userId = '';
//     this.password = '';
//     this.confirmPassword = '';
//     this.errorMessage = '';
//     this.submitted = false;
//   }

//   isValidEmail(email: string): boolean {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }

//   isValidMobile(mobile: string): boolean {
//     return /^[0-9]{10}$/.test(mobile);
//   }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class RegisterComponent {
  customerName = '';
  email = '';
  mobile = '';
  address = '';
  userId = '';
  password = '';
  confirmPassword = '';
  successMessage = '';
  errorMessage = '';
  submitted = false;

  constructor(private userService: UserService) {}

  register() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';

    // Validation
    if (!this.customerName || !this.email || !this.mobile || !this.userId || !this.password) {
      this.errorMessage = 'Please fill in all required fields';
      return;
    }
    if (!this.isValidEmail(this.email)) {
      this.errorMessage = 'Invalid email address';
      return;
    }
    if (!this.isValidMobile(this.mobile)) {
      this.errorMessage = 'Invalid mobile number';
      return;
    }
    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return;
    }
    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    // Prepare the payload exactly as backend expects!
    const userData = {
      userId: this.userId,
      fullName: this.customerName,
      address: this.address,
      email: this.email,
      username: this.userId,         // You can change username as needed
      mobileNumber: this.mobile,
      password: this.password,
      role: "customer"               // or other value as per your app logic
    };

    this.userService.registerUser(userData).subscribe({
      next: (response) => {
        this.successMessage = 'Registration successful! You can now login.';
        this.resetForm();
        setTimeout(() => { this.successMessage = ''; }, 5000);
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
      }
    });
  }

  resetForm() {
    this.customerName = '';
    this.email = '';
    this.mobile = '';
    this.address = '';
    this.userId = '';
    this.password = '';
    this.confirmPassword = '';
    this.errorMessage = '';
    this.submitted = false;
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  isValidMobile(mobile: string): boolean {
    return /^[0-9]{10}$/.test(mobile);
  }
}
