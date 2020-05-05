import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  client:any;

  async loggedInbtn():Promise<any>{
    console.log("Hits log in")


    this.client = await this.clientservice.getClient(this.username,this.password)
    this.clientservice.userObject = this.client

    console.log(this.client.userRole)
    
  }


}
