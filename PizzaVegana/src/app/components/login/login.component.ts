import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';
import { Ticket } from 'src/app/models/ticket';
import { TicketserviceService } from 'src/app/services/ticketservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private ticketservice:TicketserviceService,private router: Router, private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  username:string;
  password:string;
  client:any;
  gusername = "Guest";
  gpassword="guest";

  testTicket:Ticket
  
  

  async loggedInbtn():Promise<any>{
    // console.log("Hits log in")
    this.client = await this.clientservice.authClient(this.username,this.password)
    this.clientservice.userObject = this.client
    localStorage.setItem("user", this.client.username);
    this.testTicket = new Ticket(this.client,0,"test","5oclock", "Pending", 0)
    this.ticketservice.theTicket = this.testTicket
    console.log(this.testTicket)
    if(this.client) this.router.navigate(['/main']);
  }


  async loggedInbtng():Promise<any>{
    // console.log("Hits log in")
    this.client = await this.clientservice.authGuest(this.gusername,this.gpassword)
    // console.log(this.client.userRole)
    this.clientservice.userObject = this.client
    this.testTicket = new Ticket(this.client,0,"test","5oclock", "Pending", 0)
    this.ticketservice.theTicket = this.testTicket
    console.log(this.testTicket)
    localStorage.setItem("user", this.client.username);
    if(this.client) this.router.navigate(['/main']);
  }





}
