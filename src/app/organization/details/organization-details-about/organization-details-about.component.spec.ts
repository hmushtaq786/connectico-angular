import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsAboutComponent } from './organization-details-about.component';

describe('OrganizationDetailsAboutComponent', () => {
  let component: OrganizationDetailsAboutComponent;
  let fixture: ComponentFixture<OrganizationDetailsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDetailsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
