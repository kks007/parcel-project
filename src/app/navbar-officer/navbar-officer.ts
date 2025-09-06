import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar-officer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar-officer.html',
  styleUrls: ['./navbar-officer.css']
})
export class NavbarOfficer {}
