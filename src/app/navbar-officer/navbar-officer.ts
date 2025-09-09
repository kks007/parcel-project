import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-navbar-officer',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterModule],
  templateUrl: './navbar-officer.html',
  styleUrls: ['./navbar-officer.css']
})
export class NavbarOfficer {

  constructor(private router: Router) {}

   logout() {
    // clear any session state you keep (adjust as needed)
    localStorage.removeItem('auth');
    this.router.navigate(['/login']);
  }


}
