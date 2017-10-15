import { Injectable } from '@angular/core'
import { Product, Condition } from '../product.class';

@Injectable()
export class ProductService{

    getProducts():Promise<Product[]> {
        return new Promise((resolve, reject)=>{
            fetch('http://localhost:8080/products')
                .then(function(res) {
                    resolve(res.json());
                })
        })
    }

    deleteProducts(id: String){
        return new Promise((resolve, reject)=>{
            fetch('http://localhost:8080/delete/' + id, {method: 'DELETE'})
                .then(function(res){
                    resolve();
                }).catch(err => reject(err));
        })
    }

    createProduct(product: Product){
        return new Promise((resolve, reject)=>{
            fetch('http://localhost:8080/create', { 
                method: 'POST', 
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            })
                .then(res => resolve())
                .catch(err => reject(err));
        })
    }
}