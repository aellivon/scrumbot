import { TestBed, inject } from '@angular/core/testing';

import { ScrumDataService } from './scrum-data.service';

describe('ScrumDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScrumDataService]
    });
  });

  it('should be created', inject([ScrumDataService], (service: ScrumDataService) => {
    expect(service).toBeTruthy();
  }));
});
