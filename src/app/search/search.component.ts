import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  categoryList = [];
recipeList = [];
filteredList = [];
  newList = [];
  @ViewChild('f') slForm: NgForm;
  value: string;
  constructor(private recipe: RecipeService) { }

  ngOnInit() {
  //   const self = this;
  //   fetch('http://temp.dash.zeta.in/food.php')
  // .then(function(response) {
  //   return response.json();
  // })
  // .then(function(myJson) {
  //   const cardsList = myJson;
  //   self.categoryList.push(cardsList.categories);
  //   self.recipeList.push(cardsList.recipes);
  // })
  // .catch(e => console.log(e));
  this.categoryList = this.recipe.getCategoryList();
  this.recipeList = this.recipe.getRecipeList();
  }
  OnSearchItem(form: NgForm) {
    const val = form.value;
    this.newList = this.recipeList[0].filter((element) => {
        // tslint:disable-next-line:max-line-length
        return element.name.toUpperCase().includes(val.search.toUpperCase()) || element.details.toUpperCase().includes(val.search.toUpperCase());
    });
    form.reset();
    // console.log(this.newList);
  }

  OnCategoryClick(e) {
    // console.log(this.recipeList, this.categoryList );
    const category = e.currentTarget.lastElementChild.innerHTML;
    this.filteredList = this.recipeList[0].filter((recipe) => {
        return recipe.category === category;
        // console.log(recipe.category);
    });
    console.log(this.filteredList);
  }
}
