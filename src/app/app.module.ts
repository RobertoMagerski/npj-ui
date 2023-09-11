import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/layout/navbar/navbar.component';
import { MotivosService } from './pages/motivos/motivos.service';
import { PrimeNGModule } from './primeng.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule,
    BrowserAnimationsModule, 
    AppRoutingModule, 
    HttpClientModule,
    PrimeNGModule,
    NgxSpinnerModule
  ],
  providers: [
    MotivosService
  ],
  bootstrap: [AppComponent],
  exports: [NavbarComponent]
})
export class AppModule {}
