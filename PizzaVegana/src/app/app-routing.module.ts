import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';
import { MenupageComponent } from './components/menupage/menupage.component';
import { ByoppageComponent } from './components/byoppage/byoppage.component';
import{RegistrationComponent} from './components/registration/registration.component'


const routes: Routes = [
  {path : "main" , component : MainpageComponent},
  {path : "menupage" , component : MenupageComponent},
  {path : "byoppage" , component : ByoppageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
