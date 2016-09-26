import { Component, Input, OnInit } from '@angular/core';

import { Car } from './car';

@Component({
    selector: 'my-car',
    template: '<h1>{{car.name}}</h1>'
})
export class CarComponent implements OnInit {
    @Input()
    car: Car

    ngOnInit() {
        this.car.name = 'Changed';
    }
}