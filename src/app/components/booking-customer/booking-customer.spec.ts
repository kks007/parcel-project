import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingCustomer } from './booking-customer';

describe('BookingCustomer', () => {
  let component: BookingCustomer;
  let fixture: ComponentFixture<BookingCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
