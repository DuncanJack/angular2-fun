import { Component } from '@angular/core';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
    selector: 'another-component',
    template: '<h2>AnotherComponent</h2>'
})
export class AnotherComponent {

    constructor(private anotherService: AnotherService, private myService: MyService, private yourService: YourService) {
        console.log('AnotherComponent.constructor');

        anotherService.log();
        myService.log();
        yourService.log();
    }

}