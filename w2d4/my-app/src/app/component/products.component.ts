import { Component, EventEmitter, OnInit } from '@angular/core';
import { products, Product, Condition } from '../product.class';
import { ProductService } from '../service/product-service';

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
        this.productService.getProducts().then(products => this.productlist = products);
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
        this.productService.deleteProducts(product._id).then(() => { this.getProducts() }).catch(err => console.log("hit"));
    }

    createProduct(product){
        this.productService.createProduct(product).then(()=> { this.getProducts() }).catch(err => console.log("hit"));
    }

    addToCart(product){
        this.productService
    }
    //updateProduct(product)
}