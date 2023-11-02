import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressCircleBarsComponent } from './progress-circle-bars.component';

describe('ProgressCircleBarsComponent', () => {
  let component: ProgressCircleBarsComponent;
  let fixture: ComponentFixture<ProgressCircleBarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressCircleBarsComponent]
    });
    fixture = TestBed.createComponent(ProgressCircleBarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
