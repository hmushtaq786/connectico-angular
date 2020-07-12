import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFinishComponent } from './project-finish.component';

describe('ProjectFinishComponent', () => {
  let component: ProjectFinishComponent;
  let fixture: ComponentFixture<ProjectFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
