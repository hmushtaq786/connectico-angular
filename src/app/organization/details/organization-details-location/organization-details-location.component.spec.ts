import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsLocationComponent } from './organization-details-location.component';

describe('OrganizationDetailsLocationComponent', () => {
  let component: OrganizationDetailsLocationComponent;
  let fixture: ComponentFixture<OrganizationDetailsLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDetailsLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
