import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsCreatedbyComponent } from './organization-details-createdby.component';

describe('OrganizationDetailsCreatedbyComponent', () => {
  let component: OrganizationDetailsCreatedbyComponent;
  let fixture: ComponentFixture<OrganizationDetailsCreatedbyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDetailsCreatedbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsCreatedbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
