import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAboutComponent } from './details-about.component';

describe('DetailsAboutComponent', () => {
  let component: DetailsAboutComponent;
  let fixture: ComponentFixture<DetailsAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
