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
  // this.ticketservice.theTicket.pizzas.forEach((p) => { })

//   createEachPizza(p):Promise<Pizza> {
//     let pizzapromise:Promise<Pizza> = this.http.post<Pizza>(`http://localhost:9000/pizzas`,     
// {"pizzaId":0,
// "ticket":p.ticket,
// "price":p.price,
// "pizzaName":p.pizzaName,
// "status":"Unbaked",
// "items":p.items}).toPromise()

// return pizzapromise
//   }

  
 
 theTicket:Ticket

}

// [{"pizzaId":0,"price":this.theTicket.pizzas[0].price,"pizzaName":this.theTicket.pizzas[0].pizzaName,
//     "status":"Unbaked"}]

// {"pizzaId":3,"price":7.0,
// "pizzaName":"Test Pizza 3",
// "status":"Testing",
// "items":[{"itemId":16,"itemName":"Spicy Chickpea","itemCost":0.99,"category":"topping"},
// {"itemId":1,"itemName":"Hand Tossed","itemCost":0.0,"category":"dough"},
// {"itemId":11,"itemName":"Vegan Four Cheese Blend","itemCost":0.0,"category":"cheese"},
// {"itemId":23,"itemName":"Basic Pesto","itemCost":0.75,
// "category":"extra"}]}