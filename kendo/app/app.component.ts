import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ],
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    show = false;

    onButtonClick() {
        console.log('Hello from Kendo UI!');
    }
}