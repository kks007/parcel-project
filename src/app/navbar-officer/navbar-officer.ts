import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar-officer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar-officer.html',
  styleUrls: ['./navbar-officer.css']
})
export class NavbarOfficer {}
