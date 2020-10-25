import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadTitleComponent } from './read-title.component';

describe('ReadTitleComponent', () => {
  let component: ReadTitleComponent;
  let fixture: ComponentFixture<ReadTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
