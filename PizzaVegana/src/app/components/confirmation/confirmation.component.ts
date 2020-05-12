import { Component, OnInit } from '@angular/core';
import { TicketserviceService } from 'src/app/services/ticketservice.service';
import { Ticket } from 'src/app/models/ticket';
import { Pizza } from 'src/app/models/pizza';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {

  constructor(private router: Router,private ticketservice:TicketserviceService) { }

  ngOnInit(): void {
  }
  ticketNumber:number = this.ticketservice.returnedTicket.ticketId;

  backToHome(){
    this.router.navigate(['/main']);
  }
  
}
