import { Component, ViewEncapsulation } from '@angular/core';
import { Dish, dishesData } from 'src/app/data/dishes';
import { popularDishes } from 'src/app/data/popularDishes';
import { PopularDishes } from 'src/app/shared/components/popular-dishes/popular-dishes.component';

@Component({
  selector: 'star-chef-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent {
  public popularDishes: PopularDishes[];
  public recommendedDishes: Dish[];
  constructor() {
    this.popularDishes = popularDishes;
    this.recommendedDishes = dishesData;

  }
}
