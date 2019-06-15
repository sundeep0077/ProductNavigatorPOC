import { TestBed } from '@angular/core/testing';

import { LocatorService } from './get-categories.service';

describe('LocatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LocatorService = TestBed.get(LocatorService);
    expect(service).toBeTruthy();
  });
});
