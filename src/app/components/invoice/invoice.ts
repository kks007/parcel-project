
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarCustomer } from '../../navbar-customer/navbar-customer';

@Component({
  selector: 'app-invoice',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarCustomer],
  templateUrl: './invoice.html',
  styleUrls: ['./invoice.css']
})
export class Invoice {
  bookingId: string = '';
  invoice: any = null;

  // Sample data — replace with API calls later
  private sampleInvoices: Record<string, any> = {
    'B001': {
      bookingId: 'B001',
      receiverName: 'Ravi Kumar',
      receiverAddress: '11 MG Road, Connaught Place, New Delhi',
      receiverPin: '110001',
      receiverMobile: '+91-9876543210',
      parcelWeightGram: 1500,
      parcelContentsDescription: 'Books and stationery',
      parcelDeliveryType: 'Standard',
      parcelPackingPreference: 'Fragile',
      parcelPickupTime: '2025-09-01 10:00',
      parcelDropoffTime: '2025-09-03 16:30',
      parcelServiceCost: 250,
      parcelPaymentTime: '2025-09-01 10:05'
    },
    'B002': {
      bookingId: 'B002',
      receiverName: 'Neha Singh',
      receiverAddress: 'Flat 4B, Lotus Apartments, Bangalore',
      receiverPin: '560001',
      receiverMobile: '+91-9123456780',
      parcelWeightGram: 800,
      parcelContentsDescription: 'Mobile accessories',
      parcelDeliveryType: 'Express',
      parcelPackingPreference: 'Standard',
      parcelPickupTime: '2025-09-04 09:30',
      parcelDropoffTime: '2025-09-04 15:00',
      parcelServiceCost: 420,
      parcelPaymentTime: '2025-09-04 09:35'
    }
    // add more sample invoices as needed
  };

  generateInvoice() {
    const id = this.bookingId?.trim();
    if (!id) {
      alert('Please enter a Booking ID.');
      return;
    }

    const found = this.sampleInvoices[id];
    if (found) {
      // clone to avoid accidental mutation
      this.invoice = { ...found };
    } else {
      this.invoice = { notFound: true, bookingId: id };
    }
  }

  clear() {
    this.bookingId = '';
    this.invoice = null;
  }

  printInvoice() {
    // open print dialog for the invoice area; simple approach: window.print()
    window.print();
  }
}
