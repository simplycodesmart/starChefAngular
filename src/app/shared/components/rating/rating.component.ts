import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'star-chef-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RatingComponent {
  @Input() rating: number;
}
