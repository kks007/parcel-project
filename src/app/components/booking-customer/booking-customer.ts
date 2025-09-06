import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-booking-customer',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './booking-customer.html',
  styleUrls: ['./booking-customer.css']
})
export class BookingCustomer {
  booking = {
    senderName: '',
    receiverName: '',
    pickupAddress: '',
    dropAddress: '',
    parcelWeight: '',
    parcelType: 'Document'
  };

  submitBooking() {
    console.log('Booking submitted:', this.booking);
    alert('Booking request submitted successfully!');
  }
}
