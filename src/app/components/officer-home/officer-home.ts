import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-officer-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './officer-home.html',
  styleUrls: ['./officer-home.css']
})
export class OfficerHome {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }
}
