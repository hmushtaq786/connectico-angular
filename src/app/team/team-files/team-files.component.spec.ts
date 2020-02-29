import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFilesComponent } from './team-files.component';

describe('TeamFilesComponent', () => {
  let component: TeamFilesComponent;
  let fixture: ComponentFixture<TeamFilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
