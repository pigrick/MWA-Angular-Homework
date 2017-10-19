import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../component/app.component';
import { PageNotFoundComponent } from '../component/pagenotfound.component';
import { WelcomeComponent } from '../component/welcome.component';
import { CartDetailComponent } from '../cart/cartdetail.component';
const routes : Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'cart',
        component: CartDetailComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{}