import { TestBed } from '@angular/core/testing';

import { KvpValuesApiService } from './kvp-values-api.service';

describe('KvpValuesApiService', () => {
  let service: KvpValuesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KvpValuesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
