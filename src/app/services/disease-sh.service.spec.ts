import { TestBed } from '@angular/core/testing';

import { DiseaseShService } from './disease-sh.service';

describe('DiseaseShService', () => {
  let service: DiseaseShService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiseaseShService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
