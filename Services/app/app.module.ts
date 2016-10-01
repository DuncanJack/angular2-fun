import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AnotherComponent } from './another.component';
import { MyComponent } from './my.component';
import { YourComponent } from './your.component';

import { AnotherService } from './another.service';
import { MyService } from './my.service';
import { YourService } from './your.service';

@NgModule({
  imports: [ BrowserModule ],
  declarations: [
      AppComponent,
      AnotherComponent,
      MyComponent,
      YourComponent
  ],
  providers: [
      AnotherService,
      MyService,
      YourService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
