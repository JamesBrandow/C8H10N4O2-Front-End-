import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Pizza } from 'src/app/models/pizza';
import { TicketserviceService } from 'src/app/services/ticketservice.service';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { Router } from '@angular/router';
import { ClientserviceService } from 'src/app/services/clientservice.service';

@Component({
  selector: 'app-orderhistory',
  templateUrl: './orderhistory.component.html',
  styleUrls: ['./orderhistory.component.css']
})
export class OrderhistoryComponent implements OnInit {

  constructor(private ticketservice: TicketserviceService, private orderservice:OrderserviceService,private router: Router, private clientservice: ClientserviceService) { }

  ngOnInit(): void {
    this.getTickets()
  }
tickets:Ticket
newTicket:Ticket
pizzas:Array<Pizza>

  async getTickets():Promise<any>{
    this.tickets =  await this.ticketservice.getTicket()
    
    console.log(this.tickets)
   }
   
   async displayNewOrder(ticket:Ticket){
     console.log("Re-order ticket",ticket)
     ticket.pizzas.forEach(p => {
     p.pizzaId=0
     p.status="unbaked"
     this.orderservice.ticketItems.push(p)    
     });
     console.log("Ticket items",this.orderservice.ticketItems)
     
     this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
     console.log("New ticket",this.ticketservice.theTicket)
     if(this.ticketservice.theTicket.pizzas){
       this.router.navigate(['/checkout']);
   
     }
   }

}
