import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOfficer } from './booking-officer';

describe('BookingOfficer', () => {
  let component: BookingOfficer;
  let fixture: ComponentFixture<BookingOfficer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingOfficer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingOfficer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
