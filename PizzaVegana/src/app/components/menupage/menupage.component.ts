import { Component, OnInit } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { OrderserviceService } from 'src/app/services/orderservice.service';

@Component({
  selector: 'app-menupage',
  templateUrl: './menupage.component.html',
  styleUrls: ['./menupage.component.css']
})
export class MenupageComponent implements OnInit {

  constructor(private orderservice:OrderserviceService) { }

  ngOnInit(): void {
  }

  addPizza(item:Pizza) {
    console.log(item)
    this.orderservice.ticketItems.push(item)
    console.log(this.orderservice.ticketItems)
  }

//   greenGoddess = new Pizza( GF crust, Basil Pesto Sauce, Mixed Greens, and Olive Oil)
// ChickpeaKado – Brooklyn Style Crust, Spicy Tomato Sauce, Vegan Four Cheese Blend, Spinach, Avocado
// Margherita – Hand Tossed, Classic Marinara Sauce, Vegan Mozzarella, Roma Tomatoes, Basil
}
