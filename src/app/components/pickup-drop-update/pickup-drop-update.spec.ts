import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupDropUpdate } from './pickup-drop-update';

describe('PickupDropUpdate', () => {
  let component: PickupDropUpdate;
  let fixture: ComponentFixture<PickupDropUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PickupDropUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PickupDropUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
