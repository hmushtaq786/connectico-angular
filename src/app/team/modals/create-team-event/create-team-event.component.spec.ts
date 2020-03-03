import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateTeamEventComponent } from './create-team-event.component';

describe('CreateTeamEventComponent', () => {
  let component: CreateTeamEventComponent;
  let fixture: ComponentFixture<CreateTeamEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeamEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateTeamEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
