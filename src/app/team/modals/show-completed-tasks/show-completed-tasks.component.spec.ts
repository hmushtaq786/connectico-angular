import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompletedTasksComponent } from './show-completed-tasks.component';

describe('ShowCompletedTasksComponent', () => {
  let component: ShowCompletedTasksComponent;
  let fixture: ComponentFixture<ShowCompletedTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCompletedTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompletedTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
