import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export type UserRole = 'customer' | 'admin';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: { userid: string; role: UserRole } | null = null;

  // Hardcoded sample users
  private users: { userid: string; password: string; role: UserRole }[] = [
    { userid: 'customerone', password: 'Customer@123', role: 'customer' },
    { userid: 'adminone', password: 'Admin@123', role: 'admin' },
  ];

  constructor(private router: Router) {}

  /** Try to login with userid + password */
  login(userid: string, password: string): boolean {
    const user = this.users.find(
      (u) => u.userid === userid && u.password === password
    );
    if (user) {
      this.currentUser = { userid: user.userid, role: user.role };
      localStorage.setItem('user', JSON.stringify(this.currentUser));
      return true;
    }
    return false;
  }

  /** Clear session and redirect */
  logout(): void {
    this.currentUser = null;
    localStorage.removeItem('user');
    this.router.navigate(['/login']);
  }

  /** Return current user (reload from storage if needed) */
  getUser(): { userid: string; role: UserRole } | null {
    if (!this.currentUser) {
      const stored = localStorage.getItem('user');
      if (stored) {
        this.currentUser = JSON.parse(stored) as { userid: string; role: UserRole };
      }
    }
    return this.currentUser;
  }

  /** Check if a user is logged in */
  isLoggedIn(): boolean {
    return !!this.getUser();
  }

  /** Check if logged in user has a specific role */
  hasRole(role: UserRole): boolean {
    return this.getUser()?.role === role;
  }
}
