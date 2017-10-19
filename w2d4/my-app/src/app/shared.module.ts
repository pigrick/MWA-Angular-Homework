import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

@NgModule({
    exports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ]
})
export class SharedModule{}