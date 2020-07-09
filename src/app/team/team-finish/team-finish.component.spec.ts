import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFinishComponent } from './team-finish.component';

describe('TeamFinishComponent', () => {
  let component: TeamFinishComponent;
  let fixture: ComponentFixture<TeamFinishComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFinishComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFinishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
