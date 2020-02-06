import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersModalStructureComponent } from './members-modal-structure.component';

describe('MembersModalStructureComponent', () => {
  let component: MembersModalStructureComponent;
  let fixture: ComponentFixture<MembersModalStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersModalStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersModalStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
