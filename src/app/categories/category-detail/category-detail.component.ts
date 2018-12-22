import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {
  sub: any;
  id: string;
  list = [];
  filteredList = {};

  constructor(private recipe: RecipeService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.list = this.recipe.getRecipeList();
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      });
      // console.log(this.id);
      // console.log(this.list);
      this.filteredList = this.list[0].filter((recipe) => {
        return this.id.includes(recipe.name);
        // console.log(recipe.category);
    });
      console.log(this.filteredList);

  }
  ngOnDestroy(): void {
    // Called once, before the instance is destroyed.
    // Add 'implements OnDestroy' to the class.
    this.sub.unsubscribe();
  }

}
