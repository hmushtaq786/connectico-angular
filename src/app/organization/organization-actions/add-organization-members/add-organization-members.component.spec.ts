import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOrganizationMembersComponent } from './add-organization-members.component';

describe('AddOrganizationMembersComponent', () => {
  let component: AddOrganizationMembersComponent;
  let fixture: ComponentFixture<AddOrganizationMembersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddOrganizationMembersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOrganizationMembersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
