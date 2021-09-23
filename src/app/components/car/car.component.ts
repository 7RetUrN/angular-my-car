import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  name: string;
  model: string;
  speed: number;
  colors: Colors;
  options: string[];
  constructor() {}

  ngOnInit() {
    this.name;
    this.model;
    this.speed;
    this.colors = {
      car: '',
      salon: '',
      wheels: '',
    };
  }
  addOpt(options) {
    this.options.unshift(options);
    return false;
  }
  deleteOpt(option) {
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == option) {
        this.options.splice(i, 1);
      }
    }
  }
  carSelect(carName: any) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.model = 'e46';
      this.speed = 230;
      this.colors = {
        car: 'Grey',
        salon: 'Black',
        wheels: 'Black',
      };
      this.options = ['ABC', 'Autopilot', 'Steering hydraulics', 'AvtoParking'];
    } else if (carName == 'audi') {
      this.name = 'AUDI';
      this.model = 'A8';
      this.speed = 220;
      this.colors = {
        car: 'Black',
        salon: 'Black',
        wheels: 'Black',
      };
      this.options = ['ABC', 'Autopilot', 'Steering hydraulics', 'AvtoParking'];
    } else {
      this.name = 'WV';
      this.model = 'GOLF IV 1.9 tdi';
      this.speed = 220;
      this.colors = {
        car: 'Grey',
        salon: 'Black',
        wheels: 'Black',
      };
      this.options = ['ABC', 'Autopilot', 'Steering hydraulics', 'AvtoParking'];
    }
  }
}

interface Colors {
  car: string;
  salon: string;
  wheels: string;
}
