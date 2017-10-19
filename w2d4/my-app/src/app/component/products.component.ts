import { Component, EventEmitter, OnInit } from '@angular/core';
import { products, Product, Condition } from '../product.class';
import { ProductService } from '../service/product-service';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'products',
    templateUrl: '../views/productlistbootstrap.html',
    styleUrls: ['../views/products.css']
})
export class ProductsComponent implements OnInit{
    productlist: Product[];
    selectedProduct: Product;
    constructor(private productService: ProductService){
    }

    getProducts():void {
        this.productService.getProducts()
        .subscribe(products => this.productlist = products.sort((x,y) => {
            return x.price - y.price;
        }));
    }

    ngOnInit():void{
        this.getProducts();
    }

    condition(condition: number):any{
        return Condition[condition];
    }

    onSelect(product: Product):void{
        this.selectedProduct = product;
    }

    deleteProduct(product){
        this.productService.deleteProducts(product._id).subscribe(()=> this.getProducts());
    }

    createProduct(product){
        this.productService.createProduct(product).subscribe(() => this.getProducts());
    }
    //updateProduct(product)
}