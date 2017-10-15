import { Component } from '@angular/core';
import { Product, Condition } from '../product.class';
import { CartService } from './cart.service';
import { ProductLine } from './cart.class';


@Component({
    selector: 'cart-detail',
    templateUrl: './cartdetail.html'
})
export class CartDetailComponent{
    cart: ProductLine[];
    constructor(private cartService : CartService){
        this.cart = this.cartService.cart;
    }

    getCart(){
        this.cart = this.cartService.cart;
    }

    condition(condition: number):any{
        return Condition[condition];
    }

    removeProductLine(product){
        this.cartService.deleteProduct(product);
    }
}