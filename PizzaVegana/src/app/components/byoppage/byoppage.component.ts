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

  ngOnInit(): void {
  }

  addItem(item:PizzaItems) {
    this.orderservice.currentPizzaItems.push(item)
  }

  addToTicket() {
    let pizza = new Pizza( 0, "BYO pizza", 1, "pending", this.ticketservice.theTicket )
    pizza.items = this.orderservice.currentPizzaItems
    this.orderservice.ticketItems.push(pizza)
    this.ticketservice.theTicket.pizzas = this.orderservice.ticketItems
    console.log(this.ticketservice.theTicket)
    this.orderservice.currentPizzaItems = []
  }

  // clearTicket() {
  //   this.orderservice.currentPizzaItems = []
  // }

// testPizza = new Pizza(this.orderservice.currentPizzaItems,0,"AviTestPizza",
// 1.00, "Pennding", this.ticketservice.theTicket);

  handTossed = new PizzaItems("dough",0,1,"Hand Tossed");
  thinCrust = new PizzaItems("dough",0,2,"Thin Crust");
  brooklynStyle = new PizzaItems("dough",0,3,"Brooklyn Style");
  glutenFree = new PizzaItems("dough",2,4,"Gluten Free");

  marinara = new PizzaItems("sauce",0,5,"Classic Marinara Sauce");
  tomato = new PizzaItems("sauce",0,6,"Spicy Tomato Sauce");
  pesto = new PizzaItems("sauce",0.5,7,"Basil Pesto Sauce");
  bbq = new PizzaItems("sauce",0.5,8,"BBQ Sauce");

  cheese1 = new PizzaItems("cheese",0,9,"Vegan Mozzarella");
  cheese2 = new PizzaItems("cheese",0,10,"Vegan Shredded Blend");
  cheese3 = new PizzaItems("cheese",0,11,"Vegan Four Cheese Blend");

  dip1 = new PizzaItems("extra",0.75,29,"Garlic Sauce");
  dip2 = new PizzaItems("extra",0.75,30,"Basic Pesto");
  dip3 = new PizzaItems("extra",0.75,31,"Olive Oil");
  dip4 = new PizzaItems("extra",0.75,32,"Buffalo Sauce");

  mxdGreen = new PizzaItems("topping",0.99,26,"Mixed Greens");
  chickpea  = new PizzaItems("topping",0.99,27,"Chickpeas");
  avocado = new PizzaItems("topping",0.99,28,"Avocado");
  beef  = new PizzaItems("topping",1.99,29,"Beyond Meat 'Beef'");
  pepperoni = new PizzaItems("topping",1.99,30,"Yves Veggie Pepperoni");
  sausage  = new PizzaItems("topping",1.99,31,"Beyond Meat 'Sausage'");
  chicken  = new PizzaItems("topping",1.99,32,"Deliciou Plant-Based 'Chicken'");
  Spinach = new PizzaItems("topping",0.99,15,"Spinach");
  Onion = new PizzaItems("topping",0.99,16,"Onion");
  RomaTomatoes = new PizzaItems("topping",0.99,17,"Roma Tomatoes");
  Mushrooms = new PizzaItems("topping",0.99,18,"Mushrooms");
  Olives = new PizzaItems("topping",0.99,24,"Olives");
  Pineapple = new PizzaItems("topping",0.99,23,"Pineapple");
  Basil = new PizzaItems("topping",0.99,22,"Basil");
  BananaPepper = new PizzaItems("topping",0.99,21,"Banana Pepper");
  PickledFresnoChilli = new PizzaItems("topping",0.99,20,"Pickled Fresno Chilli");
  SpicyChickpea = new PizzaItems("topping",0.99,19,"Spicy Chickpea");
}
