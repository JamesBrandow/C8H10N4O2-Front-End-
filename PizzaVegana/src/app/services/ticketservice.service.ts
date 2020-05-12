import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Client } from '../models/client';
import { ClientserviceService } from './clientservice.service';
import { HttpClient } from '@angular/common/http';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {

  constructor(private clientservice:ClientserviceService, private http:HttpClient) { }

  createTicket():Promise<Ticket> {

    let jsonTicket = {"ticketId":0,
    "placementTime":"Time Test",
    "status":"Pending",
    "note":"this is a test",
    "client":this.theTicket.client,
    "cost":this.theTicket.cost,
    "pizzas":this.theTicket.pizzas}
    console.log(jsonTicket)
    // let postTicket = JSON.stringify(this.theTicket)
    let ticketpromise:Promise<Ticket> = this.http.post<Ticket>(`http://localhost:9000/tickets`, jsonTicket).toPromise()
    return ticketpromise
    
  }
  getTicket():Promise<Ticket>{
    let ticketPromise:Promise<Ticket> = this.http.get<Ticket>(`http://localhost:9000/tickets/client/${this.theTicket.client.clientId}`).toPromise()
    return ticketPromise
  }


  
 
 theTicket:Ticket

}
