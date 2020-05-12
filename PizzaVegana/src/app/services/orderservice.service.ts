import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor() { }

  currentPizzaItems = []

  ticketItems= []
}
