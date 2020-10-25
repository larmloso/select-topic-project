import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEpnameComponent } from './edit-epname.component';

describe('EditEpnameComponent', () => {
  let component: EditEpnameComponent;
  let fixture: ComponentFixture<EditEpnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEpnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEpnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
