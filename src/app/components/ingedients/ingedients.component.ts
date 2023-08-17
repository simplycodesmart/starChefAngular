import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dish, dishesData } from 'src/app/data/dishes';

@Component({
  selector: 'star-chef-ingedients',
  templateUrl: './ingedients.component.html',
  styleUrls: ['./ingedients.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class IngedientsComponent implements OnInit {

  public data: Dish;

  constructor(public _router: Router, private _route: ActivatedRoute) { }


  ngOnInit(): void {
    const item = localStorage.getItem("star-chef-navigation-flag")
    if (!item || item == 'null') {
      // this._router.navigateByUrl('home');
    }
    localStorage.setItem("star-chef-navigation-flag", 'null');
    this._route.paramMap.subscribe((params) => {
      this.data = dishesData.find(item => item.id == parseInt(params.get('id') || '0')) || {} as any;
    });
  }
}
