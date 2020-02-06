import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspacesModalStructureComponent } from './workspaces-modal-structure.component';

describe('WorkspacesModalStructureComponent', () => {
  let component: WorkspacesModalStructureComponent;
  let fixture: ComponentFixture<WorkspacesModalStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspacesModalStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspacesModalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
