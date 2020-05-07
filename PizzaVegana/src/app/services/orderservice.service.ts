import { Injectable } from '@angular/core';
import { PizzaItems } from 'src/app/models/pizzaitem'

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor() { }

  currentPizzaItems = []

}


