import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamFeedComponent } from './team-feed.component';

describe('TeamFeedComponent', () => {
  let component: TeamFeedComponent;
  let fixture: ComponentFixture<TeamFeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamFeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
