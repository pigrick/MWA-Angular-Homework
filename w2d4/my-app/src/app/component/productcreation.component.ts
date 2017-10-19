import { Component, Input, Output ,EventEmitter, OnInit } from '@angular/core';
import { products, Product, Condition } from '../product.class';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { NameValidators } from '../validator/name.validator';
import { ProductService } from '../service/product-service';
@Component({
    selector: 'product-creation',
    templateUrl: '../views/productcreation.html',
    providers:[NameValidators]
})
export class ProductCreationComponent implements OnInit{
    //product: Product = new Product();
    productCreationForm: FormGroup;

    constructor(private fb: FormBuilder, private productService: ProductService){}

    ngOnInit(){
        this.productCreationForm = this.fb.group({
            name: ['', [Validators.required], NameValidators.uniqueName(this.productService)],
            description:[],
            price:['', Validators.pattern('^[0-9]*$')],
            condition:[],
            category:[]
        })
    }
    // @Output()
    // createRequest = new EventEmitter<Product>();

    create(form:NgForm){
        this.productService.createProduct(form.value).subscribe(()=>{ alert('Create Success!')});

        // this.createRequest.emit(form.value);
        this.productCreationForm.reset();
    }

    get name(){
        return this.productCreationForm.get('name');
    }
    get description(){
        return this.productCreationForm.get('description');
    }
    get price(){
        return this.productCreationForm.get('price');
    }
    get condition(){
        return this.productCreationForm.get('condition');
    }
    get category(){
        return this.productCreationForm.get('category');
    }
}