import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkspaceEventComponent } from './workspace-event.component';

describe('WorkspaceEventComponent', () => {
  let component: WorkspaceEventComponent;
  let fixture: ComponentFixture<WorkspaceEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkspaceEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkspaceEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
