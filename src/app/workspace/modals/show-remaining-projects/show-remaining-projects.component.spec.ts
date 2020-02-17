import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowRemainingProjectsComponent } from './show-remaining-projects.component';

describe('ShowRemainingProjectsComponent', () => {
  let component: ShowRemainingProjectsComponent;
  let fixture: ComponentFixture<ShowRemainingProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowRemainingProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowRemainingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
