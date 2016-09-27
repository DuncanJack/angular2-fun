import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { PersonComponent } from './person.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        PersonComponent,
        Page1Component,
        Page2Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
