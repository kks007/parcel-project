import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth';

export const roleGuard = (role: 'customer' | 'admin'): CanActivateFn => {
  return () => {
    const auth = inject(AuthService);
    const router = inject(Router);

    if (auth.isLoggedIn() && auth.hasRole(role)) {
      return true;
    }

    router.navigate(['/login']);
    return false;
  };
};
