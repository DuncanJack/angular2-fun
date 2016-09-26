import { Component } from '@angular/core';
import { Car } from './car';

@Component({
    selector: 'my-app',
    template: '<h1>{{voiture.name}}</h1><my-car [car]="voiture"></my-car>'
})
export class AppComponent {
    voiture: Car;

    constructor() {
        this.voiture = new Car();
        this.voiture.name = 'Big Red';
    }
}
