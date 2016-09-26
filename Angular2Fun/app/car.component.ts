import { Component, Input, OnInit } from '@angular/core';

import { Car } from './car';

@Component({
    selector: 'my-car',
    template: '<h1>{{car.name}}</h1><button (click)="test()">test</button>'
})
export class CarComponent implements OnInit {
    @Input()
    car: Car

    ngOnInit() {
        this.car.name = 'Changed';
    }

    test() {
        this.car.name = 'Changed Again!';
    }
}