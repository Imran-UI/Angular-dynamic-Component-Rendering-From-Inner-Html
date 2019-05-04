import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html'
})
export class Rating implements OnInit {
@Input()data;

ngOnInit() { 
   console.log("data in rating ", this.data );
 }
}