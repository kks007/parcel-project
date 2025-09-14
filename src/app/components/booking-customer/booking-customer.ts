import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';
import { BookingService, Booking } from '../../services/booking';

@Component({
  selector: 'app-booking-customer',
  standalone: true,
  imports: [FormsModule, RouterLink, NavbarCustomer],
  templateUrl: './booking-customer.html',
  styleUrls: ['./booking-customer.css']
})
export class BookingCustomer {
  bookingFormData = {
    recName: '',
    recAddress: '',
    recPin: '',
    recMobile: '',
    parWeightGram: 0,
    parContentsDescription: '',
    parDeliveryType: 'STANDARD',
    parPackingPreference: 'STANDARD_PACKAGING',
    parPickupTime: '',
    parServiceCost: ''
  };

  constructor(private bookingService: BookingService) {}

  private formatDateTime(dateTimeStr: string): string {
    if (!dateTimeStr) return '';
    return dateTimeStr.length === 16 ? dateTimeStr + ':00' : dateTimeStr;
  }

  submitBooking() {
    const newBooking: Booking = {
      userId: 1, // TODO - Replace with dynamic logged-in user ID
      recName: this.bookingFormData.recName,
      recAddress: this.bookingFormData.recAddress,
      recPin: this.bookingFormData.recPin,
      recMobile: this.bookingFormData.recMobile,
      parWeightGram: this.bookingFormData.parWeightGram,
      parContentsDescription: this.bookingFormData.parContentsDescription,
      parDeliveryType: this.bookingFormData.parDeliveryType,
      parPackingPreference: this.bookingFormData.parPackingPreference,
      parPickupTime: this.formatDateTime(this.bookingFormData.parPickupTime),
      parServiceCost: this.bookingFormData.parServiceCost
    };

    this.bookingService.createBooking(newBooking).subscribe(
      (response: any) => {
        alert('Booking request submitted successfully!');
      },
      (error: any) => {
        alert('Failed to submit booking. Please try again.');
      }
    );
  }
}
