import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationCoverComponent } from './organization-cover.component';

describe('OrganizationCoverComponent', () => {
  let component: OrganizationCoverComponent;
  let fixture: ComponentFixture<OrganizationCoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationCoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationCoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
