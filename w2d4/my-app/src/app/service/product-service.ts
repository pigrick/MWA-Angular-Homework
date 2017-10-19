import { Injectable } from '@angular/core'
import { Product, Condition } from '../product.class';
import { Observable } from 'rxjs/Observable';
import { Headers, Http, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService{
    constructor(private http: Http){}
    getProducts():Observable<Product[]> {
        return this.http.get('http://localhost:8080/products').map(res => res.json() as Product[]);
    }

    deleteProducts(id: String){
        return this.http.delete('http://localhost:8080/delete/' + id);
    }

    createProduct(product: Product){
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('http://localhost:8080/create', product, options);
    }
    // getProducts():Promise<Product[]> {
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/products')
    //             .then(function(res) {
    //                 resolve(res.json());
    //             })
    //     })
    // }

    // deleteProducts(id: String){
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/delete/' + id, {method: 'DELETE'})
    //             .then(function(res){
    //                 resolve();
    //             }).catch(err => reject(err));
    //     })
    // }

    // createProduct(product: Product){
    //     return new Promise((resolve, reject)=>{
    //         fetch('http://localhost:8080/create', { 
    //             method: 'POST', 
    //             headers: {
    //                 'Accept': 'application/json, text/plain, */*',
    //                 'Content-Type': 'application/json'
    //             },
    //             body: JSON.stringify(product)
    //         })
    //             .then(res => resolve())
    //             .catch(err => reject(err));
    //     })
    // }
}