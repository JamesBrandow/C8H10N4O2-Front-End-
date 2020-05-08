import { Component, OnInit } from '@angular/core';
import { TicketserviceService } from 'src/app/services/ticketservice.service';
import { Ticket } from 'src/app/models/ticket';
import { Pizza } from 'src/app/models/pizza';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})

export class CheckoutComponent implements OnInit {
  //totalCost:Number;
  constructor(private ticketservice:TicketserviceService) {}
  ngOnInit(): void {
  }
  
  pizzaArray = [
    {"size": 'Medium', "pizzaName": 'BYO1', "dough": 'Hand Tossed', "sauce": 'Classic Marinara Sauce', "cheese": "Vegan Mozzarella", "toppings":['Spinach','Onion', 'Mushrooms'], "extras": ['Garlic Sauce','Basic Pesto'], "cost": 9.99},
    {"size": 'Large', "pizzaName": 'BYO2', "dough": 'Hand Tossed', "sauce": 'Classic Marinara Sauce', "cheese": "Vegan Mozzarella", "toppings":['Spinach','Onion', 'Mushrooms'], "extras": ['Garlic Sauce','Basic Pesto'], "cost": 9.99},
    {"size": 'Medium', "pizzaName": 'BYO3', "dough": 'Hand Tossed', "sauce": 'Classic Marinara Sauce', "cheese": "Vegan Mozzarella", "toppings":['Spinach','Onion', 'Mushrooms'], "extras": ['Garlic Sauce','Basic Pesto'], "cost": 9.99},
    {"size": 'Medium', "pizzaName": 'BYO3', "dough": 'Hand Tossed', "sauce": 'Classic Marinara Sauce', "cheese": "Vegan Mozzarella", "toppings":['Spinach','Onion', 'Mushrooms'], "extras": ['Garlic Sauce','Basic Pesto'], "cost": 9.99}
   ];

persistedTicket:Ticket
persistedPizza:Pizza

   async submitNewTicket() {
    this.persistedTicket = await this.ticketservice.createTicket()
    // console.log(this.persistedTicket)
    this.ticketservice.theTicket.pizzas.forEach((p) => {
    this.persistedPizza = await this.ticketservice.createEachPizza(p)
    })
   } 

}

let pizzaArray: { 
  pizzaName: string,
  pizzaItems: string[], 
  size: string, 
  dough: string, 
  sauce: string, 
  cheese: string, 
  toppings:string[], 
  extras:string[],
  cost: Number 
}[] = [];
let totalCost:Number;
