import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    styleUrls: [ '../node_modules/@progress/kendo-angular-buttons/dist/npm/css/main.css' ],
    template: `
    <h1>My First Kendo UI Angular 2 App</h1>
    <button kendoButton (click)="onButtonClick()" [primary]=true>My Kendo UI Button</button>
    `
})
export class AppComponent {
    onButtonClick() {
        alert('Hello from Kendo UI!');
    }
}