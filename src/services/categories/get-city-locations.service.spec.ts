import { TestBed } from '@angular/core/testing';

import { GetCityLocationsService } from './get-city-locations.service';

describe('GetCityLocationsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetCityLocationsService = TestBed.get(GetCityLocationsService);
    expect(service).toBeTruthy();
  });
});
