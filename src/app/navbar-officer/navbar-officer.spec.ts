import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarOfficer } from './navbar-officer';

describe('NavbarOfficer', () => {
  let component: NavbarOfficer;
  let fixture: ComponentFixture<NavbarOfficer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarOfficer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarOfficer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
