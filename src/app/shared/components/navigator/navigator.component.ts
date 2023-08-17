import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'star-chef-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigatorComponent {
  @Input() icon: string;
  @Input() title: string;
}
