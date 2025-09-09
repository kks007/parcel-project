import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';

@Component({
  selector: 'app-tracking-customer',
  standalone: true,
  imports: [FormsModule, NavbarCustomer],
  templateUrl: './tracking-customer.html',
  styleUrls: ['./tracking-customer.css']
})
export class TrackingCustomer {
  trackingId: string = '';
  trackingResult: string | null = null;

  trackParcel() {
    if (this.trackingId.trim()) {
      // Dummy result for now
      this.trackingResult = `Parcel ${this.trackingId} is currently in transit.`;
    } else {
      this.trackingResult = null;
    }
  }
}
