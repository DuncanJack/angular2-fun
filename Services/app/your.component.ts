import { Component } from '@angular/core';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
    selector: 'your-component',
    template: '<h2>YourComponent</h2>'
})
export class YourComponent {

    constructor(private anotherService: AnotherService, private myService: MyService, private yourService: YourService) {
        console.log('YourComponent.constructor');

        anotherService.log();
        myService.log();
        yourService.log();
    }
}