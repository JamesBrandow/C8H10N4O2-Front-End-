import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  client:any;
  gusername = "Guest";
  gpassword="guest";


  
  

  async loggedInbtn():Promise<any>{
    // console.log("Hits log in")
    this.client = await this.clientservice.authClient(this.username,this.password)
    this.clientservice.userObject = this.client
    localStorage.setItem("user", this.client.username);
    if(this.client) this.router.navigate(['/main']);
  }


  async loggedInbtng():Promise<any>{
    // console.log("Hits log in")
    this.client = await this.clientservice.authGuest(this.gusername,this.gpassword)
    // console.log(this.client.userRole)
    this.clientservice.userObject = this.client
    localStorage.setItem("user", this.client.username);
    if(this.client) this.router.navigate(['/main']);
  }





}
