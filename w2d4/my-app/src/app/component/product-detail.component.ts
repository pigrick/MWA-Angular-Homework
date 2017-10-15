import { Component, Input, Output ,EventEmitter } from '@angular/core';
import { products, Product, Condition } from '../product.class';
import { CartService } from '../cart/cart.service';

@Component({
    selector: 'product-detail',
    templateUrl: '../views/productdetail.html'
})
export class ProductDetailComponent {
    @Input()
    product: Product;

    @Output()
    deleteRequest = new EventEmitter<Product>();
    
    constructor(private cartService: CartService){}
    delete(){
        this.deleteRequest.emit(this.product);
        this.product = null;
    }    

    addToCart(product){
        this.cartService.addProduct(product);
    }
}