import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CartModule } from './cart/cart.module';
import { SharedModule } from './shared.module';
import { AppRoutingModule } from './routing/approuting.module';
import { ProductRoutingModule } from './routing/productrouting.module';

import { AppComponent } from './component/app.component';
import { WelcomeComponent } from './component/welcome.component';
import { ProductsComponent } from './component/products.component';
import { ProductDetailComponent } from './component/product-detail.component';
import { ProductCreationComponent } from './component/productcreation.component';
//import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './service/product-service';
import { PageNotFoundComponent } from './component/pagenotfound.component';
import { ProductIndexComponent } from './component/productindex.component';
import { ProductModule } from './component/product.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    // ProductsComponent,
    // ProductDetailComponent,
    // ProductCreationComponent,
    PageNotFoundComponent,
    // ProductIndexComponent
  ],
  imports: [
    BrowserModule,
    CartModule,
    ProductModule,
    AppRoutingModule
    //ProductRoutingModule
    //HttpClientModule
  ],
  providers:[ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
