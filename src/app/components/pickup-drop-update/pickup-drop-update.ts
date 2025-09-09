import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarOfficer } from '../../navbar-officer/navbar-officer';

@Component({
  selector: 'app-pickup-drop-update',
  standalone: true,
  imports: [FormsModule, NavbarOfficer],
  templateUrl: './pickup-drop-update.html',
  styleUrls: ['./pickup-drop-update.css']
})
export class PickupDropUpdate {
  bookingId: string = '';
  status: string = '';
  updateMessage: string | null = null;

  updateStatus() {
    if (this.bookingId.trim() && this.status.trim()) {
      this.updateMessage = `Booking ${this.bookingId} updated successfully with status: ${this.status}`;
      this.bookingId = '';
      this.status = '';
    } else {
      this.updateMessage = 'Please enter both Booking ID and Status.';
    }
  }
}
