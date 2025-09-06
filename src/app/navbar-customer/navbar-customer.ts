import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-customer.html',
  styleUrls: ['./navbar-customer.css']
})
export class NavbarCustomer {}
