import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ProductService } from '../service/product-service';
import { Observable } from 'rxjs/Observable';
import { Product, Condition } from '../product.class';

export class NameValidators{

    static uniqueName(productService: ProductService) {
        return (control : AbstractControl) => {
            return productService.getProducts().map(products => products
                .filter(product => product.name === control.value as string))
                .map(products => !products.length)
                .map(res=>{
                    return res ? null : {uniqueName: true};
                });
        };
    }
}