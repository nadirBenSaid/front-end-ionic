import { TestBed } from '@angular/core/testing';

import { LieuxParCategorieService } from './lieux-par-categorie.service';

describe('LieuxParCategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LieuxParCategorieService = TestBed.get(LieuxParCategorieService);
    expect(service).toBeTruthy();
  });
});
