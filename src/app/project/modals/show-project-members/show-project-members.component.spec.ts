import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowProjectMembersComponent } from './show-project-members.component';

describe('ShowProjectMembersComponent', () => {
  let component: ShowProjectMembersComponent;
  let fixture: ComponentFixture<ShowProjectMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowProjectMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowProjectMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
