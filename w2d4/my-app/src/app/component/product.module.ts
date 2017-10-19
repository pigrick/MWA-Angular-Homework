
import { NgModule } from '@angular/core';
import { AppRoutingModule } from '../routing/approuting.module';
import { ProductRoutingModule } from '../routing/productrouting.module';
import { AppComponent } from '../component/app.component';
import { ProductsComponent } from '../component/products.component';
import { ProductDetailComponent } from '../component/product-detail.component';
import { ProductCreationComponent } from '../component/productcreation.component';
//import { HttpClientModule } from '@angular/common/http';
import { ProductService } from '../service/product-service';
import { CartService } from '../cart/cart.service';
import { PageNotFoundComponent } from '../component/pagenotfound.component';
import { ProductIndexComponent } from '../component/productindex.component';
import { CartModule } from '../cart/cart.module';
import { SharedModule } from '../shared.module';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailComponent,
    ProductCreationComponent,
    ProductIndexComponent
  ],
  exports :[
    ProductsComponent,
    ProductDetailComponent,
    ProductCreationComponent,
    ProductIndexComponent
  ]
  ,
  imports: [
    SharedModule,
    CartModule,
    ProductRoutingModule
    //HttpClientModule
  ],
  providers :[CartService]
})
export class ProductModule { }
