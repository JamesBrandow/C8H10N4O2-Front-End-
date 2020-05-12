import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { Router } from '@angular/router';
import { PizzaItems } from 'src/app/models/pizzaitem'
import { Pizza } from 'src/app/models/pizza';
import { Ticket } from 'src/app/models/ticket';
import { TicketserviceService } from 'src/app/services/ticketservice.service';


@Component({
  selector: 'app-byoppage',
  templateUrl: './byoppage.component.html',
  styleUrls: ['./byoppage.component.css']
})
export class ByoppageComponent implements OnInit {

  constructor(private orderservice:OrderserviceService, private router: Router, private ticketservice:TicketserviceService) { }

  // item = this.orderservice.ticketItems

  ngOnInit(): void {
  }

  sum = 0
  order = this.orderservice
  num : number
  //price = []

  addItem(item:PizzaItems) {
    this.order.currentPizzaItems.push(item)
    this.add(item.itemCost)
    console.log(item)
    console.log(item.itemCost)
  }

  addToTicket() {
    let pizza = new Pizza( 0, "Build Your Own pizza", this.sum, "Unbaked")
    pizza.items = this.orderservice.currentPizzaItems
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    console.log(this.ticketservice.theTicket)
    this.orderservice.currentPizzaItems = []
    alert("Custom Pizza has been Added to Order")
  }

  add(num) {
    this.sum += num
  }

  subtract(num) {
    this.sum -= num
  }
  
  removeItem(item:PizzaItems) {
    let index = this.order.currentPizzaItems.findIndex(x => x === item)
    
    if (index > -1) {
      this.order.currentPizzaItems.splice(index, 1);
    }
    console.log(item)
    console.log(index)
    this.subtract(item.itemCost)
    console.log(item.itemCost)
  }

// testPizza = new Pizza(this.orderservice.currentPizzaItems,0,"AviTestPizza",
// 1.00, "Pennding", this.ticketservice.theTicket);

}
