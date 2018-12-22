import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FavouritesCardComponent } from './favourites-card.component';

describe('FavouritesCardComponent', () => {
  let component: FavouritesCardComponent;
  let fixture: ComponentFixture<FavouritesCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FavouritesCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FavouritesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
