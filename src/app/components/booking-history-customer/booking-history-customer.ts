import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';

@Component({
  selector: 'app-booking-history-customer',
  standalone: true,
  imports: [CommonModule, NavbarCustomer],
  templateUrl: './booking-history-customer.html',
  styleUrls: ['./booking-history-customer.css']
})
export class BookingHistoryCustomer {
  bookings = [
    { id: 'B001', date: '2025-09-01', status: 'Delivered', amount: '₹250' },
    { id: 'B002', date: '2025-09-03', status: 'In Transit', amount: '₹180' },
    { id: 'B003', date: '2025-09-05', status: 'Pending Pickup', amount: '₹300' },
  ];
}
