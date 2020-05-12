import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import{RegistrationComponent} from './components/registration/registration.component';
import{AccountComponent} from './components/account/account.component'
import{AboutactComponent} from './components/aboutact/aboutact.component'


const routes: Routes = [
  {path : "" , component : LoginComponent},
  {path : "main" , component : MainpageComponent},
  {path : "register" , component : RegistrationComponent},
  {path : "account" , component : AccountComponent},
  {path : "abt" , component : AboutactComponent},
  { path: '**', component: LoginComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
