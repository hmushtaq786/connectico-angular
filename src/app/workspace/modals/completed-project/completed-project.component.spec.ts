import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedProjectComponent } from './completed-project.component';

describe('CompletedProjectComponent', () => {
  let component: CompletedProjectComponent;
  let fixture: ComponentFixture<CompletedProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletedProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletedProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
