import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEpComponent } from './read-ep.component';

describe('ReadEpComponent', () => {
  let component: ReadEpComponent;
  let fixture: ComponentFixture<ReadEpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadEpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
