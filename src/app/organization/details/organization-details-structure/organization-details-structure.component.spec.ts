import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationDetailsStructureComponent } from './organization-details-structure.component';

describe('OrganizationDetailsStructureComponent', () => {
  let component: OrganizationDetailsStructureComponent;
  let fixture: ComponentFixture<OrganizationDetailsStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationDetailsStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationDetailsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
