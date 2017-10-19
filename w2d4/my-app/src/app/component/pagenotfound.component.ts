import { Component } from '@angular/core';

@Component({
  selector: 'pagenotfound',
  template: `
  <div class ="container">
    <h1>{{title}}</h1>
  </div>
  `
})
export class PageNotFoundComponent {
  title = 'Page Not Found!';
}
