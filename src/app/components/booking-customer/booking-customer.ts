// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterLink } from '@angular/router';
// import { NavbarCustomer } from '../../navbar-customer/navbar-customer';

// @Component({
//   selector: 'app-booking-customer',
//   standalone: true,
//   imports: [FormsModule, RouterLink, NavbarCustomer],
//   templateUrl: './booking-customer.html',
//   styleUrls: ['./booking-customer.css']
// })
// export class BookingCustomer {
//   booking = {
//     senderName: '',
//     receiverName: '',
//     pickupAddress: '',
//     dropAddress: '',
//     parcelWeight: '',
//     parcelType: 'Document'
//   };

//   submitBooking() {
//     console.log('Booking submitted:', this.booking);
//     alert('Booking request submitted successfully!');
//   }
// }


import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';
import { Booking } from '../../services/booking';
import { BookingService } from '../../services/booking';

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
    parDeliveryType: 'STANDARD', // Match enum exactly
    parPackingPreference: 'STANDARD_PACKAGING', // Match enum exactly
    parPickupTime: '',
    parDropoffTime: '',
    parServiceCost: '',
    parPaymentTime: '',
    parStatus: 'BOOKED' // Match enum exactly
  };

  constructor(private bookingService: BookingService) {}

  // Helper to ensure date string has seconds for backend parsing
  private formatDateTime(dateTimeStr: string) : string {
    if (!dateTimeStr) return '';
    return dateTimeStr.length === 16 ? dateTimeStr + ':00' : dateTimeStr;
  }

  submitBooking() {
    // Format dates with seconds before sending
    const newBooking: Booking = {
      userId: 1, // TODO: replace with logged-in user ID dynamically
      ...this.bookingFormData,
      parPickupTime: this.formatDateTime(this.bookingFormData.parPickupTime),
      parDropoffTime: this.formatDateTime(this.bookingFormData.parDropoffTime),
      parPaymentTime: this.formatDateTime(this.bookingFormData.parPaymentTime)
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
