import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  categoryList = [];
  recipeList = [];
  constructor() {
    // this.getList();
   }

   getList() {
    const self = this;
    fetch('http://temp.dash.zeta.in/food.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const cardsList = myJson;
    self.categoryList.push(cardsList.categories);
    self.recipeList.push(cardsList.recipes);
  })
  .catch(e => console.log(e));
  // return this.categoryList;
   }

  getCategoryList() {
    this.getList();
  return this.categoryList;
  }

  getRecipeList() {
    this.getList();
  return this.recipeList;
}
  }
