import { Component, Input } from '@angular/core';

import { Continent } from './continent';

@Component({
    selector: 'continent',
    templateUrl: 'app/continent.component.html'
})
export class ContinentComponent {

    @Input()
    model: Continent;

}