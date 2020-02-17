import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveWorkspaceComponent } from './leave-workspace.component';

describe('LeaveWorkspaceComponent', () => {
  let component: LeaveWorkspaceComponent;
  let fixture: ComponentFixture<LeaveWorkspaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaveWorkspaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveWorkspaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
