import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOfficer } from '../../navbar-officer/navbar-officer';

@Component({
  selector: 'app-booking-history-officer',
  standalone: true,
  imports: [CommonModule, NavbarOfficer],
  templateUrl: './booking-history-officer.html',
  styleUrls: ['./booking-history-officer.css']
})
export class BookingHistoryOfficer {
  bookings = [
    { id: 'B010', customer: 'Ravi Kumar', date: '2025-09-01', status: 'Delivered', amount: '₹250' },
    { id: 'B011', customer: 'Amit Sharma', date: '2025-09-03', status: 'In Transit', amount: '₹180' },
    { id: 'B012', customer: 'Neha Singh', date: '2025-09-05', status: 'Pending Pickup', amount: '₹300' },
  ];

  updateStatus(bookingId: string) {
    alert(`Update status for booking: ${bookingId}`);
  }
}
