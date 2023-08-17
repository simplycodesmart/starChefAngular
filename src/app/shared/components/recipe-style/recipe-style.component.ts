import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'star-chef-recipe-style',
  templateUrl: './recipe-style.component.html',
  styleUrls: ['./recipe-style.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecipeStyleComponent {
  @Input() items: string[];
  public selectedIndex: number = 0;
}
