import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';

@Component({
  selector: 'app-customer-home',
  standalone: true,
  imports: [CommonModule, RouterModule, NavbarCustomer],
  templateUrl: './customer-home.html',
  styleUrls: ['./customer-home.css']
})
export class CustomerHome {
  constructor(private router: Router) {}

  logout() {
    // clear any session state you keep (adjust as needed)
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
