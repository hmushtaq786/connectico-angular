import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedTeamComponent } from './completed-team.component';

describe('CompletedTeamComponent', () => {
  let component: CompletedTeamComponent;
  let fixture: ComponentFixture<CompletedTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
