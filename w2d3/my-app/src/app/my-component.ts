import {Component} from '@angular/core';
@Component({
    selector: 'my-component',
    template: `<h1 *ngIf="first" >This is my first {{msg}}.</h1><h1 *ngIf="!first"> This is the other {{msg}}.</h1>`
})
export class MyComponent {
    first = true;
    msg = 'component';
}