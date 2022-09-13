import { TestBed } from '@angular/core/testing';

import { DataMestraService } from './dato-mestro.service';

describe('DatoMestroService', () => {
  let service: DataMestraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMestraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
