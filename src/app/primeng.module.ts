import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';

@NgModule({

    exports: [
        CommonModule,
        FormsModule,
        ButtonModule,
        BrowserAnimationsModule
    ]


})
export class PrimeNGModule { }
