import { Routes } from '@angular/router';

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
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },

  // Customer routes
  { path: 'customer-home', component: CustomerHome },
  { path: 'booking-customer', component: BookingCustomer },
  { path: 'booking-history-customer', component: BookingHistoryCustomer },
  { path: 'tracking-customer', component: TrackingCustomer },
  { path: 'delivery-status', component: DeliveryStatus },
  { path: 'invoice', component: Invoice },

  // Officer routes
  { path: 'officer-home', component: OfficerHome },
  { path: 'booking-officer', component: BookingOfficer },
  { path: 'booking-history-officer', component: BookingHistoryOfficer },
  { path: 'tracking-officer', component: TrackingOfficer},
  { path: 'pickup-drop-update', component: PickupDropUpdate },
];
