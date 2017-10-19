import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../component/pagenotfound.component';
import { ProductIndexComponent } from '../component/productindex.component';
import { ProductsComponent } from '../component/products.component';
import { ProductDetailComponent } from '../component/product-detail.component';
import { ProductCreationComponent } from '../component/productcreation.component';

const productRoutes : Routes = [
    {
        path: 'products',
        component: ProductIndexComponent,
        children: [
            {
                path: '',
                component: ProductsComponent
            },
            {
                path: 'ma',
                component: ProductDetailComponent
            },
            {
                path: 'create',
                component: ProductCreationComponent
            }
            
        ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(productRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductRoutingModule{}