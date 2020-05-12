import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import{RegistrationComponent} from './components/registration/registration.component';
import{AccountComponent} from './components/account/account.component';
import{AboutactComponent} from './components/aboutact/aboutact.component';
import {MenupageComponent} from './components/menupage/menupage.component';
import {ByoppageComponent} from './components/byoppage/byoppage.component'


const routes: Routes = [
  {path : "" , component : LoginComponent},
  {path : "main" , component : MainpageComponent},
  {path : "register" , component : RegistrationComponent},
  {path : "menupage" , component : MenupageComponent},
  {path : "byoppage" , component :ByoppageComponent},
  {path : "account" , component : AccountComponent},
  {path : "abt" , component : AboutactComponent},
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
