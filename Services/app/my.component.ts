import { Component } from '@angular/core';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
    selector: 'my-component',
    template: '<h2>MyComponent</h2>'
})
export class MyComponent {

    constructor(private anotherService: AnotherService, private myService: MyService, private yourService: YourService) {
        console.log('MyComponent.constructor');

        anotherService.log();
        myService.log();
        yourService.log();
    }

}