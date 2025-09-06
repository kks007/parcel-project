import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingCustomer } from './tracking-customer';

describe('TrackingCustomer', () => {
  let component: TrackingCustomer;
  let fixture: ComponentFixture<TrackingCustomer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingCustomer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingCustomer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
