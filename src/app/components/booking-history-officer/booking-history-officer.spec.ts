import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryOfficer } from './booking-history-officer';

describe('BookingHistoryOfficer', () => {
  let component: BookingHistoryOfficer;
  let fixture: ComponentFixture<BookingHistoryOfficer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingHistoryOfficer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingHistoryOfficer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
