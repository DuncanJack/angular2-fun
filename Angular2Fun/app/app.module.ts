import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContinentComponent } from './continent.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ContinentComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }