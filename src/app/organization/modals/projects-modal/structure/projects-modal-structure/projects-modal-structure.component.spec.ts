import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsModalStructureComponent } from './projects-modal-structure.component';

describe('ProjectsModalStructureComponent', () => {
  let component: ProjectsModalStructureComponent;
  let fixture: ComponentFixture<ProjectsModalStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectsModalStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectsModalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
