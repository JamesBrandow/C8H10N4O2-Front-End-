import { Component, OnInit } from '@angular/core';
// import{RegisterService} from 'src/app/services/register.service'
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
  this.nuclient = await this.clientservice.registerClient(this.username,this.password,this.email,this.fname,this.lname,this.phone)
  console.log(this.nuclient.username)
  // this.client = await this.clientservice.authClient(this.nuclient.username,this.nuclient.password)
  if(this.nuclient) this.router.navigate([' ']);
 }


}
