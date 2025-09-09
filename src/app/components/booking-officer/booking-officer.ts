import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarOfficer } from '../../navbar-officer/navbar-officer';

@Component({
  selector: 'app-booking-officer',
  standalone: true,
  imports: [CommonModule, NavbarOfficer],
  templateUrl: './booking-officer.html',
  styleUrls: ['./booking-officer.css']
})
export class BookingOfficer {
  bookingRequests = [
    { id: 'B001', customer: 'Alice', parcel: 'Documents', status: 'Pending' },
    { id: 'B002', customer: 'Bob', parcel: 'Electronics', status: 'Pending' },
    { id: 'B003', customer: 'Charlie', parcel: 'Clothes', status: 'Pending' }
  ];

  updateStatus(requestId: string, newStatus: string) {
    const request = this.bookingRequests.find(b => b.id === requestId);
    if (request) {
      request.status = newStatus;
    }
  }
}
