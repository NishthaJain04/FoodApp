import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryDetailComponent } from './categories/category-detail/category-detail.component';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/categories', pathMatch: 'full'},
  { path:  'categories', component: CategoriesComponent },
  { path:  'detail/:id', component: CategoryDetailComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
