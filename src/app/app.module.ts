import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddToCart } from './components/add-to-cart/add-to-cart.component';
import { Pricing } from './components/pricing/pricing.component';
import { Rating } from './components/rating/rating.component';
import { DynamicHTMLModule } from './dynamic-html'

@NgModule({
  imports:[BrowserModule, 
  FormsModule,  
  DynamicHTMLModule.forRoot({
      components: [
        {component: AddToCart, selector: 'add-to-cart'},
        {component: Pricing, selector: 'app-pricing'},
        {component: Rating, selector: 'app-rating'}
      ]}) ],
  declarations: [ AppComponent, AddToCart, Pricing,  Rating],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
