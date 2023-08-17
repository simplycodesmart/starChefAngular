import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from '../components/navigator/navigator.component';
import { MaterialModule } from 'src/app/material/material/material.module';
import { DateTimeComponent } from '../components/date-time/date-time.component';
import { RecipeStyleComponent } from '../components/recipe-style/recipe-style.component';
import { PopularDishesComponent } from '../components/popular-dishes/popular-dishes.component';
import { RatingComponent } from '../components/rating/rating.component';



@NgModule({
  declarations: [NavigatorComponent, DateTimeComponent, RecipeStyleComponent, PopularDishesComponent, RatingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [NavigatorComponent, DateTimeComponent, RecipeStyleComponent, PopularDishesComponent, RatingComponent]
})
export class SharedModule { }
