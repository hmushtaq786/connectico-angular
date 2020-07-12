import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressProjectComponent } from './in-progress-project.component';

describe('InProgressProjectComponent', () => {
  let component: InProgressProjectComponent;
  let fixture: ComponentFixture<InProgressProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
