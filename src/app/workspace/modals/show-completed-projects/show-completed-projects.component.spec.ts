import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCompletedProjectsComponent } from './show-completed-projects.component';

describe('ShowCompletedProjectsComponent', () => {
  let component: ShowCompletedProjectsComponent;
  let fixture: ComponentFixture<ShowCompletedProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowCompletedProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowCompletedProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
