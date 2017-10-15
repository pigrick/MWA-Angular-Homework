import { Product } from '../product.class';

export class ProductLine{
    product : Product;
    unit : number;
    constructor(product, unit){
        this.product = product;
        this.unit = unit;
    }
}
    