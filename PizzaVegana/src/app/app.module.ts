
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { AccountComponent } from './components/account/account.component';
import { AboutactComponent } from './components/aboutact/aboutact.component';
import { ByoppageComponent } from './components/byoppage/byoppage.component';
import { MenupageComponent } from './components/menupage/menupage.component';
import { OrderhistoryComponent } from './components/orderhistory/orderhistory.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainpageComponent,
    RegistrationComponent,
    CarouselComponent,
    FooterComponent,
    NavComponent,
    AccountComponent,
    AboutactComponent,
    ByoppageComponent,
    MenupageComponent,
    OrderhistoryComponent,
    CheckoutComponent,
    ConfirmationComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
