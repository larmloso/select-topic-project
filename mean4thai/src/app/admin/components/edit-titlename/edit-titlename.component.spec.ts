import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTitlenameComponent } from './edit-titlename.component';

describe('EditTitlenameComponent', () => {
  let component: EditTitlenameComponent;
  let fixture: ComponentFixture<EditTitlenameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTitlenameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTitlenameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
