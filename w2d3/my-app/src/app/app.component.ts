import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <p>
      app Works!
      <my-component></my-component>
      <specialcomponent></specialcomponent>
    </p>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
