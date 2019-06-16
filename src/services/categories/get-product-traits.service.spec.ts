import { TestBed } from '@angular/core/testing';

import { GetProductTraitsService } from './get-product-traits.service';

describe('GetProductTraitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProductTraitsService = TestBed.get(GetProductTraitsService);
    expect(service).toBeTruthy();
  });
});
