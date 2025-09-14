import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';
import { Tracking, TrackingService } from '../../services/tracking.service';
import { NgIf, NgClass, DatePipe } from '@angular/common'; 

@Component({
  selector: 'app-tracking-customer',
  standalone: true,
  imports: [FormsModule, NavbarCustomer, NgIf, NgClass, DatePipe],
  templateUrl: './tracking-customer.html',
  styleUrls: ['./tracking-customer.css']
})
export class TrackingCustomer {
  trackingId: string = '';
  trackingResult: Tracking | null = null;
  errorMessage: string = '';

  constructor(private trackingService: TrackingService) {}

  trackParcel() {
    this.trackingResult = null;
    this.errorMessage = '';

    if (!this.trackingId.trim()) {
      this.errorMessage = 'Please enter your Tracking ID.';
      return;
    }

    this.trackingService.getBookingById(this.trackingId.trim()).subscribe({
      next: (result: Tracking) => {
        this.trackingResult = result;
      },
      error: (err: any) => {
        this.errorMessage = 'No booking found for the entered ID.';
      }
    });
  }
}
