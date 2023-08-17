import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'star-chef-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavigatorComponent {
  @Input() icon: string;
  @Input() title: string;
  @Input() path: string;
  constructor(public _router: Router) { }
  public navigateBack() {
    this._router.navigateByUrl(this.path);
  }
}
