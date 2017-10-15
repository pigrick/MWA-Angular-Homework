import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { products, Product, Condition } from '../product.class';

@Component({
    selector: 'product-creation',
    templateUrl: '../views/productcreation.html'
})
export class ProductCreationComponent{
    product: Product = new Product();

    @Output()
    createRequest = new EventEmitter<Product>();

    create(){
        this.createRequest.emit(this.product);
        this.product = new Product();
    }
}