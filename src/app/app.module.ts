import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from './material/material/material.module';
import { SharedModule } from "./shared/shared/shared.module";
import { HttpClientModule } from '@angular/common/http';
import { RecommendedComponent } from './shared/components/recommended/recommended.component';
import { IngedientsComponent } from './components/ingedients/ingedients.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecommendedComponent,
    IngedientsComponent,

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AppModule { }
