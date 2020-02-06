import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationAvatarComponent } from './organization-avatar.component';

describe('OrganizationAvatarComponent', () => {
  let component: OrganizationAvatarComponent;
  let fixture: ComponentFixture<OrganizationAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
