import { Component } from '@angular/core';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
    selector: 'my-app',
    template: '<h1>My First Angular App</h1>'
})
export class AppComponent {

    constructor(private anotherService: AnotherService, private myService: MyService, private yourService: YourService) {
        console.log('AppComponent.constructor');

        anotherService.log();
        myService.log();
        yourService.log();
    }

}
