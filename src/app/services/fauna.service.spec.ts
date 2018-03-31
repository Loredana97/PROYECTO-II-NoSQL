import { TestBed, inject } from '@angular/core/testing';

import { FaunaService } from './fauna.service';

describe('FaunaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaunaService]
    });
  });

  it('should be created', inject([FaunaService], (service: FaunaService) => {
    expect(service).toBeTruthy();
  }));
});
