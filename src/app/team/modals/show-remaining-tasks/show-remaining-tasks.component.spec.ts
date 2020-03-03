import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemainingTasksComponent } from './show-remaining-tasks.component';

describe('ShowRemainingTasksComponent', () => {
  let component: ShowRemainingTasksComponent;
  let fixture: ComponentFixture<ShowRemainingTasksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRemainingTasksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRemainingTasksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
