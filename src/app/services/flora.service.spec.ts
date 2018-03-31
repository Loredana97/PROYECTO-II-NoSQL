import { TestBed, inject } from '@angular/core/testing';

import { FloraService } from './flora.service';

describe('FloraService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FloraService]
    });
  });

  it('should be created', inject([FloraService], (service: FloraService) => {
    expect(service).toBeTruthy();
  }));
});
