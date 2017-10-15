import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './component/app.component';
import { ProductsComponent } from './component/products.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { ProductCreationComponent } from './component/productcreation.component';
//import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product-service';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    ProductCreationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CartModule
    //HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
