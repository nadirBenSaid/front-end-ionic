import { TestBed } from '@angular/core/testing';

import { ReclamerService } from './reclamer.service';

describe('ReclamerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReclamerService = TestBed.get(ReclamerService);
    expect(service).toBeTruthy();
  });
});
