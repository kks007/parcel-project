import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar-customer.html',
  styleUrls: ['./navbar-customer.css']
})
export class NavbarCustomer {

  constructor(private router: Router) {}

   logout() {
    // clear any session state you keep (adjust as needed)
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
