import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingHistoryCustomer } from './booking-history-customer';

describe('BookingHistoryCustomer', () => {
  let component: BookingHistoryCustomer;
  let fixture: ComponentFixture<BookingHistoryCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingHistoryCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingHistoryCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
