import { TestBed } from '@angular/core/testing';

import { SolarSystemsService } from './solar-systems.service';

describe('SolarSystemsService', () => {
  let service: SolarSystemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SolarSystemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
