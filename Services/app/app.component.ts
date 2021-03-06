import { Component } from '@angular/core';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@Component({
    selector: 'my-app',
    template: ` <h1>AppComponent</h1>
                <another-component></another-component>
                <my-component></my-component>
                <your-component></your-component>`
})
export class AppComponent {

    constructor(private anotherService: AnotherService, private myService: MyService, private yourService: YourService) {
        console.log('AppComponent.constructor');

        anotherService.log();
        myService.log();
        yourService.log();
    }

}
