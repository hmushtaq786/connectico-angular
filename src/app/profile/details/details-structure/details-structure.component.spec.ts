import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsStructureComponent } from './details-structure.component';

describe('DetailsStructureComponent', () => {
  let component: DetailsStructureComponent;
  let fixture: ComponentFixture<DetailsStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
