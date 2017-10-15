import { Injectable } from '@angular/core';
import { ProductLine } from './cart.class';

@Injectable()
export class CartService{
    cart: ProductLine[] = new Array<ProductLine>();
    
    addProduct(product){
        for(let p of this.cart){
            if(p.product._id == product._id){
                p.unit++;
                return;
            }
        }
        this.cart.push(new ProductLine(product, 1));
    }

    deleteProduct(product){
        for(let p of this.cart){
            if(p.product._id == product._id){
                this.cart.splice(this.cart.indexOf(p), 1);
            }
        }
    }


}