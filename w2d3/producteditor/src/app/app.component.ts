import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>{{title}}</h1>
    <table border=1>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Condition</th>
          <th>Category</th>
        </tr>
        <tr>
          <td>{{product.id}}</td>
          <td>{{product.name}}</td>
          <td>{{product.description}}</td>
          <td>{{product.price}}</td>
          <td>{{product.condition}}</td>
          <td>{{product.category}}</td>
        </tr>
      </table>
      <div>
        <label>name: </label>
        <input [(ngModel)]="product.name" placeholder="name" />
      </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'Product Editor';
  product: Product = {
    id: 1,
    name: 'Iphone X',
    description: 'Smartphone developed by Apple',
    price: 999,
    condition: 'new',
    category: 'mobile'
  };
}

export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  condition: string;
  category: string;
}
