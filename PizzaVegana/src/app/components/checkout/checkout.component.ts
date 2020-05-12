import { Component, OnInit } from '@angular/core';
import { TicketserviceService } from 'src/app/services/ticketservice.service';
import { Ticket } from 'src/app/models/ticket';
import { Pizza } from 'src/app/models/pizza';
import { Router } from '@angular/router';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  constructor(private orderservice:OrderserviceService, private router: Router,private ticketservice:TicketserviceService) {}
  ngOnInit(): void {
    // console.log("Check Below");
    // console.log(this.ticketservice.theTicket.pizzas)
    // console.log("Check above");
    // this.pizzaArray.forEach(pizza => {
    // this.totalPrice =this.totalPrice + pizza.price.valueOf();
    // });
    this.totalTicketPrice= this.ticketservice.theTicket.cost;
  }
  applyPromoCode() {
    let codeEntered = this.promocode.valueOf();
    if(codeEntered=="GET10") {
      this.oldTicketPrice = this.ticketservice.theTicket.cost;
      this.newTicketPrice = this.oldTicketPrice - (this.oldTicketPrice * 10 /100);
      this.ticketservice.theTicket.cost = this.newTicketPrice;
      this.totalTicketPrice = this.ticketservice.theTicket.cost;
      this.ticketservice.theTicket.cost.valueOf().toFixed(2);
      this.totalTicketPrice.valueOf().toFixed(2);
      this.promoMessage = "Promocode "+this.promocode+" was applied successfully";
      this.promoCodeButtonValue = true;
    } else if(codeEntered=="GET20") {
      this.oldTicketPrice = this.ticketservice.theTicket.cost;
      this.newTicketPrice = this.oldTicketPrice - (this.oldTicketPrice * 20 /100);
      this.ticketservice.theTicket.cost = this.newTicketPrice;
      this.totalTicketPrice = this.ticketservice.theTicket.cost;
      this.ticketservice.theTicket.cost.valueOf().toFixed(2);
      this.totalTicketPrice.valueOf().toFixed(2);
      this.promoMessage = "Promocode "+this.promocode+" was applied successfully";
      this.promoCodeButtonValue = true;
    } else if(codeEntered=="C8H10N4O2") {
      this.oldTicketPrice = this.ticketservice.theTicket.cost;
      this.newTicketPrice = this.oldTicketPrice - 10;
      this.ticketservice.theTicket.cost = this.newTicketPrice;
      this.totalTicketPrice = this.ticketservice.theTicket.cost;
      this.ticketservice.theTicket.cost.valueOf().toFixed(2);
      this.totalTicketPrice.valueOf().toFixed(2);
      this.promoMessage = "Promocode "+this.promocode+" was applied successfully";
      this.promoCodeButtonValue = true;
    } else {
      this.promoMessage = "Promocode "+this.promocode+" is incorrect";
    }
  }
promocode:string;
persistedTicket:Ticket
persistedPizza:Pizza
pizzaArray = this.ticketservice.theTicket.pizzas;
totalPrice:number = 0;
totalTicketPrice:number;
promoMessage:string;
promoCodeButtonValue : boolean = false;
oldTicketPrice:number;
newTicketPrice:number;

backToMenu(){
  this.ticketservice.theTicket.cost = this.oldTicketPrice;
  this.router.navigate(['/menupage']);
}
removeThisPizza(pizza:Pizza, i:number){
  //setting the ticket price to old pice
  this.ticketservice.theTicket.cost = this.oldTicketPrice;
  //enabling the promo code field again
  this.promoCodeButtonValue = false;
  this.ticketservice.theTicket.pizzas.splice(i,1);
  this.ticketservice.theTicket.pizzas
  //new price calculation
  this.ticketservice.theTicket.cost = this.ticketservice.theTicket.cost - pizza.price;
  this.totalTicketPrice = this.ticketservice.theTicket.cost;
  this.ticketservice.theTicket.cost.valueOf().toFixed(2);
  this.totalTicketPrice.valueOf().toFixed(2);
}

  async submitNewTicket() {
    this.persistedTicket = await this.ticketservice.createTicket()
    this.ticketservice.returnedTicket = this.persistedTicket;
    if(this.persistedTicket) {
      this.ticketservice.theTicket.cost=0;
      this.ticketservice.theTicket.note="";
      this.ticketservice.theTicket.pizzas=[];
      this.ticketservice.theTicket.placementTime="";
      this.ticketservice.theTicket.status="";
      this.ticketservice.theTicket.ticketId=0;
      this.orderservice.ticketItems=[];
      this.orderservice.currentPizzaItems=[];
      this.router.navigate(['/confirmation']);
    }
  } 

  


}
