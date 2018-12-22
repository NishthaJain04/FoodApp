import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { RecipeService } from '../../recipe.service';


@Component({
  selector: 'app-categories-card',
  templateUrl: './categories-card.component.html',
  styleUrls: ['./categories-card.component.css']
})
export class CategoriesCardComponent implements OnInit {
  @Input() search: any;
  @Input() filter: any;
  list = [];
  constructor(private route: ActivatedRoute,
    private router: Router,
  private recipe: RecipeService) { }

  ngOnInit() {
  this.list = this.recipe.getRecipeList();
}
  OnDishClick(e) {
    console.log(e);
    const selectedCardName = e.currentTarget.lastElementChild.innerText.split('\n')[0];
    this.router.navigate(['detail/' + selectedCardName]);
  }
}
