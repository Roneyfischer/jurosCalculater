import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewIntesrestComponent } from './view-intesrest.component';

describe('ViewIntesrestComponent', () => {
  let component: ViewIntesrestComponent;
  let fixture: ComponentFixture<ViewIntesrestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewIntesrestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewIntesrestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
