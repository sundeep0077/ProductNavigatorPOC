import { TestBed } from '@angular/core/testing';

import { FetchOptimizedRouteService } from './fetch-optimized-route.service';

describe('FetchOptimizedRouteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FetchOptimizedRouteService = TestBed.get(FetchOptimizedRouteService);
    expect(service).toBeTruthy();
  });
});
