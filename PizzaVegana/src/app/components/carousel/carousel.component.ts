import { Component, OnInit } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'



@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [style({ opacity: 0 }), animate('300ms', style({ opacity: 1 }))]),
      transition('* => void', [style({ opacity: 1 }), animate('300ms', style({ opacity: 0 }))]),
    ])
  ]
})
export class CarouselComponent implements OnInit {

  constructor() { }
  current = 0;
  img_list = [
    'assets/images/greengoddesspizza2.jpg/?image=0',
    'assets/images/chicpeakadopizza2.jpg/?image=1',
    'assets/images/magherita2.jpg/?image=2',
  ];

  ngOnInit(){
    setInterval(() => {
      this.current = ++this.current % this.img_list.length;
    }, 3000);
  }

}
