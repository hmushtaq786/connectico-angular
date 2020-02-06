import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationTilesComponent } from './organization-tiles.component';

describe('OrganizationTilesComponent', () => {
  let component: OrganizationTilesComponent;
  let fixture: ComponentFixture<OrganizationTilesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationTilesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationTilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
