import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { CategoriesComponent } from './categories/categories.component';
import { FilterComponent } from './filter/filter.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FavouritesCardComponent } from './favourites/favourites-card/favourites-card.component';
import { CategoriesCardComponent } from './categories/categories-card/categories-card.component';
import { AppRoutingModule } from './app-routing.module';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { FormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    CategoriesComponent,
    FilterComponent,
    FavouritesComponent,
    FavouritesCardComponent,
    CategoriesCardComponent,
    CategoryDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
