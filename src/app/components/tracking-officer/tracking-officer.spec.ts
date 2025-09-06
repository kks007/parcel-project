import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingOfficer } from './tracking-officer';

describe('TrackingOfficer', () => {
  let component: TrackingOfficer;
  let fixture: ComponentFixture<TrackingOfficer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrackingOfficer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackingOfficer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
