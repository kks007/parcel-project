import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';

// Home + Auth
import { HomeComponent } from './components/home/home';
import { LoginComponent } from './components/login/login';
import { RegisterComponent } from './components/register/register';

// Customer Pages
import { CustomerHome } from './components/customer-home/customer-home';
import { BookingCustomer } from './components/booking-customer/booking-customer';
import { BookingHistoryCustomer } from './components/booking-history-customer/booking-history-customer';
import { TrackingCustomer } from './components/tracking-customer/tracking-customer';
import { DeliveryStatus } from './components/delivery-status/delivery-status';
import { Invoice } from './components/invoice/invoice';

// Officer Pages
import { OfficerHome } from './components/officer-home/officer-home';
import { BookingOfficer } from './components/booking-officer/booking-officer';
import { BookingHistoryOfficer } from './components/booking-history-officer/booking-history-officer';
import { TrackingOfficer } from './components/tracking-officer/tracking-officer';
import { PickupDropUpdate } from './components/pickup-drop-update/pickup-drop-update';

export const routes: Routes = [
  // Public
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Customer routes (protected)
  { path: 'customer-home', component: CustomerHome, canActivate: [authGuard, roleGuard('customer')] },
  { path: 'booking-customer', component: BookingCustomer, canActivate: [authGuard, roleGuard('customer')] },
  { path: 'booking-history-customer', component: BookingHistoryCustomer, canActivate: [authGuard, roleGuard('customer')] },
  { path: 'tracking-customer', component: TrackingCustomer, canActivate: [authGuard, roleGuard('customer')] },
  { path: 'delivery-status', component: DeliveryStatus, canActivate: [authGuard, roleGuard('customer')] },
  { path: 'invoice', component: Invoice, canActivate: [authGuard, roleGuard('customer')] },

  // Officer/Admin routes (protected)
  { path: 'officer-home', component: OfficerHome, canActivate: [authGuard, roleGuard('admin')] },
  { path: 'booking-officer', component: BookingOfficer, canActivate: [authGuard, roleGuard('admin')] },
  { path: 'booking-history-officer', component: BookingHistoryOfficer, canActivate: [authGuard, roleGuard('admin')] },
  { path: 'tracking-officer', component: TrackingOfficer, canActivate: [authGuard, roleGuard('admin')] },
  { path: 'pickup-drop-update', component: PickupDropUpdate, canActivate: [authGuard, roleGuard('admin')] },
];
