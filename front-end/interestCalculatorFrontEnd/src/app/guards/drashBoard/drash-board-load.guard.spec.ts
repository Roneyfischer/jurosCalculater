import { TestBed } from '@angular/core/testing';

import { DrashBoardLoadGuard } from './drash-board-load.guard';

describe('DrashBoardLoadGuard', () => {
  let guard: DrashBoardLoadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DrashBoardLoadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
