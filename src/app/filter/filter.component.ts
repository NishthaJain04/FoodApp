import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
categoryList = [];
recipeList = [];
filteredList = [];
  constructor() { }

  ngOnInit() {
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
