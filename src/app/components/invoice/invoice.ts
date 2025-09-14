import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';
import { Tracking } from '../../services/tracking.service';
import { TrackingService } from '../../services/tracking.service';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarCustomer],
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.css']
})
export class Invoice {
  bookingId: string = '';
  invoice: Tracking | null = null;
  notFound: boolean = false;

  constructor(private bookingService: TrackingService) {}

  generateInvoice() {
    const id = this.bookingId?.trim();
    if (!id) {
      alert('Please enter a Booking ID.');
      return;
    }

    this.bookingService.getBookingById(id).subscribe({
      next: (data) => {
        this.invoice = data;
        this.notFound = false;
      },
      error: () => {
        this.invoice = null;
        this.notFound = true;
      }
    });
  }

  clear() {
    this.bookingId = '';
    this.invoice = null;
    this.notFound = false;
  }

  printInvoice() {
    window.print();
  }
}

