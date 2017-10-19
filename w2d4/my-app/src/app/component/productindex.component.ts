import { Component } from '@angular/core';

@Component({
  selector: 'product-index',
  template: `
  <div class ="container">
    <h1>{{title}}</h1>
        </div>
        <router-outlet></router-outlet>
    
  `
})
export class ProductIndexComponent {
  title = 'Product Page';
}
