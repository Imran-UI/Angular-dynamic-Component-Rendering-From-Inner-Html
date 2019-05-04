import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: [ './add-to-cart.component.css' ]
})
export class AddToCart implements OnInit {

  @Input()data;

  constructor() {
   
  }

  ngOnInit() { 
   console.log("data in add to cart ", this.data );
 }

}