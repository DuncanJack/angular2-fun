import { Component } from '@angular/core';

import { Continent } from './continent';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    continents: Continent[];

    constructor() {
        this.continents = [
            new Continent('Africa'),
            new Continent('Antarctica'),
            new Continent('Asia'),
            new Continent('Australia'),
            new Continent('Europe'),
            new Continent('North America'),
            new Continent('South America')
        ];
    }
}
