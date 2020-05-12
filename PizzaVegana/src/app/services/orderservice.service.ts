import { Injectable } from '@angular/core';
import { PizzaItems } from 'src/app/models/pizzaitem'

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor() { }

  currentPizzaItems = []

  ticketItems= []

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

  Spinach = new PizzaItems("topping",0.99,12,"Spinach");
  Onion = new PizzaItems("topping",0.99,13,"Onion");
  RomaTomatoes = new PizzaItems("topping",0.99,14,"Roma Tomatoes");
  Mushrooms = new PizzaItems("topping",0.99,15,"Mushrooms");
  SpicyChickpea = new PizzaItems("topping",0.99,16,"Spicy Chickpea");
  PickledFresnoChilli = new PizzaItems("topping",0.99,17,"Pickled Fresno Chilli");
  BananaPepper = new PizzaItems("topping",0.99,18,"Banana Pepper");
  Basil = new PizzaItems("topping",0.99,19,"Basil");
  Pineapple = new PizzaItems("topping",0.99,20,"Pineapple");
  Olives = new PizzaItems("topping",0.99,21,"Olives");
  mixdGreen = new PizzaItems("topping",0.99,22,"Mixed Greens");
  chickpea  = new PizzaItems("topping",0.99,23,"Chickpeas");
  avocado = new PizzaItems("topping",0.99,24,"Avocado");
  beef  = new PizzaItems("topping",1.99,25,"Beyond Meat 'Beef'");
  pepperoni = new PizzaItems("topping",1.99,26,"Yves Veggie Pepperoni");
  sausage  = new PizzaItems("topping",1.99,27,"Beyond Meat 'Sausage'");
  chicken  = new PizzaItems("topping",1.99,28,"Delicious Plant-Based 'Chicken'");

  dip1 = new PizzaItems("extra",0.75,29,"Garlic Sauce");
  dip2 = new PizzaItems("extra",0.75,30,"Basic Pesto");
  dip3 = new PizzaItems("extra",0.75,31,"Olive Oil");
  dip4 = new PizzaItems("extra",0.75,32,"Buffalo Sauce");

  size1 = new PizzaItems("size",9.99,33,"Medium");
  size2 = new PizzaItems("size",11.99,34,"Large");
}