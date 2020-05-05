import { Component, OnInit } from '@angular/core';
import {ClientserviceService} from 'src/app/services/clientservice.service'


@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private clientservice:ClientserviceService) { }

  ngOnInit(): void {
  }

  user = this.clientservice.userObject

}
