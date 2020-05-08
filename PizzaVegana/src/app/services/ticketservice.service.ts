import { Injectable } from '@angular/core';
import { Ticket } from '../models/ticket';
import { Client } from '../models/client';
import { ClientserviceService } from './clientservice.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TicketserviceService {

  constructor(private clientservice:ClientserviceService, private http:HttpClient) { }

  createTicket():Promise<Ticket> {
    // let postTicket = JSON.stringify(this.theTicket)
    let ticketpromise:Promise<Ticket> = this.http.post<Ticket>(`http://localhost:9000/tickets`, 
    {"ticketId":0,
    "placementTime":"Time Test",
    "status":"Pending",
    "note":"this is from a test run at 9:30 on a Thursday",
    "client":this.theTicket.client,
    "cost":this.theTicket.cost,
    "pizzas":[{"pizzaId":0,"price":this.theTicket.pizzas[0].price,"pizzaName":this.theTicket.pizzas[0].pizzaName,
    "status":"Unbaked"}]}
  ).toPromise()
    return ticketpromise
  }
 
 theTicket:Ticket

}