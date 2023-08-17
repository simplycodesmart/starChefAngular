import { Component, Input, ViewEncapsulation } from '@angular/core';

export interface PopularDishes {
  name: string;
  image: string;
}

@Component({
  selector: 'star-chef-popular-dishes',
  templateUrl: './popular-dishes.component.html',
  styleUrls: ['./popular-dishes.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PopularDishesComponent {
  @Input() title: string;
  @Input() items: PopularDishes[]
}
