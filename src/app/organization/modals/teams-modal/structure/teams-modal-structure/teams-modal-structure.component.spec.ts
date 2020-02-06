import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsModalStructureComponent } from './teams-modal-structure.component';

describe('TeamsModalStructureComponent', () => {
  let component: TeamsModalStructureComponent;
  let fixture: ComponentFixture<TeamsModalStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamsModalStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamsModalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
