import { Component, Input } from '@angular/core';

import { World } from './world';

@Component({
    selector: 'world',
    templateUrl: 'app/world.component.html'
})
export class WorldComponent {

    @Input()
    world: World;

}