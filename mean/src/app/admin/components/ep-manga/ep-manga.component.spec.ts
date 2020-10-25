import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpMangaComponent } from './ep-manga.component';

describe('EpMangaComponent', () => {
  let component: EpMangaComponent;
  let fixture: ComponentFixture<EpMangaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpMangaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpMangaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
