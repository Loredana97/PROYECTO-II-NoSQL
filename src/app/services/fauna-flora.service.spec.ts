import { TestBed, inject } from '@angular/core/testing';

import { FaunaFloraService } from './fauna-flora.service';

describe('FaunaFloraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FaunaFloraService]
    });
  });

  it('should be created', inject([FaunaFloraService], (service: FaunaFloraService) => {
    expect(service).toBeTruthy();
  }));
});
