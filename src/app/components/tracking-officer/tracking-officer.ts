import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarOfficer } from '../../navbar-officer/navbar-officer';

@Component({
  selector: 'app-tracking-officer',
  standalone: true,
  imports: [FormsModule, NavbarOfficer],
  templateUrl: './tracking-officer.html',
  styleUrls: ['./tracking-officer.css']
})
export class TrackingOfficer {
  trackingId: string = '';
  trackingResult: string | null = null;

  trackParcel() {
    if (this.trackingId.trim()) {
      // Dummy officer result for now
      this.trackingResult = `Parcel ${this.trackingId} is assigned to Delivery Officer Ravi Kumar.`;
    } else {
      this.trackingResult = null;
    }
  }
}
