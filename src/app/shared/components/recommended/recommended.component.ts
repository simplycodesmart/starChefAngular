import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/data/dishes';

@Component({
  selector: 'star-chef-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RecommendedComponent {
  @Input() items: Dish[];

  constructor(private router: Router) { }

  public navigateToIngedients(id: number) {
    localStorage.setItem("star-chef-navigation-flag", 'true');
    this.router.navigate([`ingedients/${id}`])
  }
}
