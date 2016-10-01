import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ContinentComponent } from './continent.component';
import { WorldComponent } from './world.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        ContinentComponent,
        WorldComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }