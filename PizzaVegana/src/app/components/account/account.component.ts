import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private router: Router, private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  upclient:any 
  username = this.clientservice.userObject.username 
  password =  this.clientservice.userObject.password
  email = this.clientservice.userObject.email
  fname =  this.clientservice.userObject.firstName
  lname =  this.clientservice.userObject.lastName
  phone =  this.clientservice.userObject.phone

  async updateBtn():Promise<any>{
    this.upclient = await this.clientservice.updateClient(this.username,this.password,this.email,this.fname,this.lname,this.phone)
    this.clientservice.userObject = this.upclient
    localStorage.setItem("user",this.upclient.username)
    if(this.upclient) this.router.navigate(['/main']);
   }

}
