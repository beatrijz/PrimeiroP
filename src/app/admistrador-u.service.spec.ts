import { TestBed } from '@angular/core/testing';

import { AdmistradorUService } from './admistrador-u.service';

describe('AdmistradorUService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdmistradorUService = TestBed.get(AdmistradorUService);
    expect(service).toBeTruthy();
  });
});
