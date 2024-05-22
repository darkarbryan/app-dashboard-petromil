import { TestBed } from '@angular/core/testing';

import { OverviewMainServiceService } from './overview-main-service.service';

describe('OverviewMainServiceService', () => {
  let service: OverviewMainServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OverviewMainServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
