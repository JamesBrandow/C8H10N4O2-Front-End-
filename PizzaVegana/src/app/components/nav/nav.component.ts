import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(private router: Router, private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  
loggedoutbtn():void{
  console.log("Hits log out")
  localStorage.clear()
  this.router.navigate([' ']);
 
 
}

}
