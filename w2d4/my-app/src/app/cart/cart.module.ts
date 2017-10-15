import { NgModule } from '@angular/core';
import { CartDetailComponent } from './cartdetail.component';
import { CartService } from './cart.service';
import { CommonModule } from '@angular/common';
import { CalculatePricePipe } from './calculateprice.pipe';

@NgModule({
    declarations: [
        CartDetailComponent,
        CalculatePricePipe
    ],
    imports: [CommonModule],
    exports: [CartDetailComponent],
    providers: [CartService] 
})
export class CartModule {}