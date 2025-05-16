import { TestBed } from '@angular/core/testing';

import { RoommatesService } from './roommates.service';

describe('RoommatesService', () => {
  let service: RoommatesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoommatesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
