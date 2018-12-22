import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-favourites-card',
  templateUrl: './favourites-card.component.html',
  styleUrls: ['./favourites-card.component.css']
})
export class FavouritesCardComponent implements OnInit {
list = [];
  constructor(private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    const self = this;
    fetch('http://temp.dash.zeta.in/food.php')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    const cardsList = myJson;
    self.list.push(cardsList.recipes);
    self.list = self.list[0].filter((element, i) => {
      // console.log(element.isFavourite === true);
      return element.isFavourite === true;
    });
    // console.log(result);
  })
  .catch(e => console.log(e));
  // console.log(this.list);
  // console.log(this.img);
}
OnDishClick(e) {
  console.log(e);
  const selectedCardName = e.currentTarget.lastElementChild.innerText.split('\n')[0];
  this.router.navigate(['detail/' + selectedCardName]);
}

}
