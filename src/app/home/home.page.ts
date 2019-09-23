import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, IonSlide } from '@ionic/angular';
import { element } from 'protractor';

const moment = require('moment');

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})

export class HomePage {
  @ViewChild('slides', {static: true}) slides: IonSlides;
  currentDate: any = moment().format('dddd, MMMM Do YYYY');
  index: any;
  sunday = true;
  monday = true;
  tuesday = true;
  wednesday = true;
  thursday = true;
  friday = true;
  saturday = true;
  inActive = true;

  constructor() {
    console.log("Today's date: " + this.currentDate);
    
  }

  ngOnInit() {
    this.slides.startAutoplay();
    this.getIndex();
  }

  getIndex() {
    this.index = this.slides.getActiveIndex();
    let sunday = this.sunday;
    let monday = this.monday;
    let tuesday = this.tuesday;
    let wednesday = this.wednesday;
    let thursday = this.thursday;
    let friday = this.friday;
    let saturday = this.saturday;
    this.index.then(function(value) {
      console.log("slide index: " + value);
      switch(value) {
        case 0:
          console.log("Sunday");
          sunday = true;
          break;
        case 1:
          console.log("Monday");
          monday = true;
          break;
        case 2:
          console.log("Tuesday");
          break;
        case 3:
          console.log("Wednesday");
          break;
        case 4:
          console.log("Thursday");
          break;
        case 5:
          console.log("Friday");
          break;
        case 6:
          console.log("Saturday");
          break;
        case 7:
          console.log("Sunday");
          break;         
          
      }
    })
  }
}
