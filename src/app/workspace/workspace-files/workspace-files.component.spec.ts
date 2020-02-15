import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceFilesComponent } from './workspace-files.component';

describe('WorkspaceFilesComponent', () => {
  let component: WorkspaceFilesComponent;
  let fixture: ComponentFixture<WorkspaceFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
