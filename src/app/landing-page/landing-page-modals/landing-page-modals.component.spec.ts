import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageModalsComponent } from './landing-page-modals.component';

describe('LandingPageModalsComponent', () => {
  let component: LandingPageModalsComponent;
  let fixture: ComponentFixture<LandingPageModalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingPageModalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageModalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
