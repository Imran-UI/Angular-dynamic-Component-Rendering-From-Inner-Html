import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html'
})
export class Pricing implements OnInit {
@Input()data;


ngOnInit() { 
   console.log("data in pricing", this.data );
 }
}