import { Component } from '@angular/core';

import { PersonComponent } from './person.component';

@Component({
    selector: 'my-app',
    template: '<h1>test</h1><my-person></my-person><page1></page1><page2></page2>'
})
export class AppComponent { }
