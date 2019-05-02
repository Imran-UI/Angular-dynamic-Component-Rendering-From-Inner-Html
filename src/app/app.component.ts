import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  template = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Title of the document</title></head><body><p class="red">AEM Content Goes Here.....(applied color red css here!!)</p><add-to-cart></add-to-cart> <br> <br> <hr><app-rating></app-rating> <br> <br> <hr> <app-pricing></app-pricing></body></html>'


  //   body =  `
  //   <p>random paragraph</p>
  //   <hello name="User"></hello>
  // `;




}
