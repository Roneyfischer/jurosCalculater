import { TestBed } from '@angular/core/testing';

import { DrashBoardGuard } from './drash-board.guard';

describe('DrashBoardGuard', () => {
  let guard: DrashBoardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DrashBoardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
