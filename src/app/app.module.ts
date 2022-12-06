import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatToolbarModule} from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import {BridgePatternModule} from "./bridge-pattern/bridge-pattern.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    BridgePatternModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
