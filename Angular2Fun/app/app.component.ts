import { Component } from '@angular/core';
import { World } from './world';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    world: World;

    constructor() {

        this.world = new World();

    }
}
