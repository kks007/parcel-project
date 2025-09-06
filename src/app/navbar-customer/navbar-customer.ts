import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-customer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-customer.html',
  styleUrls: ['./navbar-customer.css']
})
export class NavbarCustomer {}
