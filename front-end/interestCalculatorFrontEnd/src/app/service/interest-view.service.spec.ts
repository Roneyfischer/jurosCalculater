import { TestBed } from '@angular/core/testing';

import { InterestViewService } from './interest-view.service';

describe('InterestViewService', () => {
  let service: InterestViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterestViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
