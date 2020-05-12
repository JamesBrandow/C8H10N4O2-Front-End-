import { Component, OnInit } from '@angular/core';

import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private router: Router,  private clientservice:ClientserviceService) { }
  // , private clientservice:ClientserviceService
  //private register:RegisterService,

  ngOnInit(): void {
  }
  findAt(){
  let index = this.email.indexOf('@')
  return index
  }
  clearP(){
    this.phone = undefined;
  }
  clearE(){
    this.email =undefined;
  }
 nuclient:any;
 client:any;
 username:string;
 password:string;
 phone:string;
 email:string;
 fname:string;
 lname:string;


 async regBtn():Promise<any>{
  console.log("Hits reg in")
    if(this.username != undefined && this.password != undefined && this.phone != undefined && this.email != undefined
      && this.fname !=undefined && this.lname != undefined){
        if(this.findAt() != -1 && this.phone.length >=10){
          console.log(this.phone)
          this.nuclient = await this.clientservice.registerClient(this.username,this.password,this.email,this.fname,this.lname,this.phone)
          if(this.nuclient) this.router.navigate([' ']);
        }else{
          alert("Must enter valid email and phone number."); 
          if(this.findAt() == -1) this.clearE()
          else if (this.phone.length < 10) this.clearP()
      } 
    }else alert("All fields are required.");
 }


}
