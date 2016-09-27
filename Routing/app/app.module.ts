import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { routing } from './app.routing';

import { AppComponent }  from './app.component';
import { PersonComponent } from './person.component';
import { Page1Component } from './page1.component';
import { Page2Component } from './page2.component';
import { Page3Component } from './page3.component';
import { Page4Component } from './page4.component';
import { Page5Component } from './page5.component';
import { Page6Component } from './page6.component';
import { Page7Component } from './page7.component';
import { Page8Component } from './page8.component';
import { Page9Component } from './page9.component';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        PersonComponent,
        Page1Component,
        Page2Component,
        Page3Component,
        Page4Component,
        Page5Component,
        Page6Component,
        Page7Component,
        Page8Component,
        Page9Component
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
