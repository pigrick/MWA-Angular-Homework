import { Pipe, PipeTransform } from '@angular/core';
import { ProductLine } from './cart.class';

@Pipe({
    name: 'calculateprice',
    pure: false
})
export class CalculatePricePipe implements PipeTransform{
    transform(value: ProductLine){
        if(!value) {
            return null;
        }
        return value.product.price * value.unit;
    }
}