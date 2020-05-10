import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'
import { Router } from '@angular/router';


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private router: Router, private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

user = localStorage.getItem("user")

    
// show(){
//   this. user = this.clientservice.userObject
//   ()}


   
  //  console.log(user)


}
