import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProgressTeamComponent } from './in-progress-team.component';

describe('InProgressTeamComponent', () => {
  let component: InProgressTeamComponent;
  let fixture: ComponentFixture<InProgressTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProgressTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProgressTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
