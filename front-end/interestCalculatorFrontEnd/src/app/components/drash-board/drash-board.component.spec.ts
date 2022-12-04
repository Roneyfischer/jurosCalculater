import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DrashBoardComponent } from './drash-board.component';

describe('DrashBoardComponent', () => {
  let component: DrashBoardComponent;
  let fixture: ComponentFixture<DrashBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DrashBoardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DrashBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
