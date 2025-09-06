import { TestBed } from '@angular/core/testing';

import { Officer } from './officer';

describe('Officer', () => {
  let service: Officer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Officer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
