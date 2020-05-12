import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { OrderserviceService } from 'src/app/services/orderservice.service';
import { TicketserviceService } from 'src/app/services/ticketservice.service';
import { PizzaItems } from 'src/app/models/pizzaitem'

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private orderservice:OrderserviceService, private ticketservice:TicketserviceService) { }

  ngOnInit(): void {
  }

  addPizza(item:Pizza) {
    this.orderservice.ticketItems.push(item)
  }

  addGreenGoddessMToTicket() {
    let pizza = new Pizza( 0, "Green Goddess", 14.23, "Unbaked")
    pizza.items = [
      this.orderservice.size1, 
      this.orderservice.glutenFree, 
      this.orderservice.pesto,
      this.orderservice.mixdGreen,
      this.orderservice.dip3
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Medium Green Goddess Added to Order")
  }

  addGreenGoddessLToTicket() {
    let pizza = new Pizza( 0, "Green Goddess", 16.23, "Unbaked")
    pizza.items = [
      this.orderservice.size2, 
      this.orderservice.glutenFree, 
      this.orderservice.pesto,
      this.orderservice.mixdGreen,
      this.orderservice.dip3
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Large Green Goddess Added to Order")
  }

  addChickpeaKadoMToTicket() {
    let pizza = new Pizza( 0, "Chickpea Kado", 11.97, "Unbaked")
    pizza.items = [
      this.orderservice.size1, 
      this.orderservice.brooklynStyle,
      this.orderservice.tomato,
      this.orderservice.cheese2,
      this.orderservice.Spinach,
      this.orderservice.avocado
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Medium Chickpea Kado Added to Order")
  }

  addChickpeaKadoLToTicket() {
    let pizza = new Pizza( 0, "Chickpea Kado", 13.97, "Unbaked")
    pizza.items = [
      this.orderservice.size2, 
      this.orderservice.brooklynStyle,
      this.orderservice.tomato,
      this.orderservice.cheese2,
      this.orderservice.Spinach,
      this.orderservice.avocado
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Large Chickpea Kado Added to Order")
  }

  addMargheritaMToTicket() {
    let pizza = new Pizza( 0, "Margherita", 11.97, "Unbaked")
    pizza.items = [ 
      this.orderservice.size1,
      this.orderservice.handTossed,
      this.orderservice.marinara,
      this.orderservice.cheese1,
      this.orderservice.RomaTomatoes,
      this.orderservice.Basil
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Medium Margherita Added to Order")
  }

  addMargheritaLToTicket() {
    let pizza = new Pizza( 0, "Margherita", 13.97, "Unbaked")
    pizza.items = [ 
      this.orderservice.size2,
      this.orderservice.handTossed,
      this.orderservice.marinara,
      this.orderservice.cheese1,
      this.orderservice.RomaTomatoes,
      this.orderservice.Basil
    ]
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    // console.log(this.ticketservice.theTicket)
    alert("Large Margherita Added to Order")
  }
}
