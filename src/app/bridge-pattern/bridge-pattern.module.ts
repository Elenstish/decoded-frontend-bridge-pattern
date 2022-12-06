import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { MatDividerModule } from "@angular/material/divider";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";

import { WidgetWrapperComponent } from './widget-wrapper/widget-wrapper.component';
import { VelocityWidgetComponent } from './widgets/velocity-widget/velocity-widget.component';
import { WeatherWidgetComponent } from './widgets/weather-widget/weather-widget.component';

@NgModule({
  declarations: [
    WidgetWrapperComponent,
    VelocityWidgetComponent,
    WeatherWidgetComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatProgressBarModule,
    MatProgressSpinnerModule
  ],
  exports: [
    WidgetWrapperComponent,
    WeatherWidgetComponent,
    VelocityWidgetComponent
  ]
})
export class BridgePatternModule { }
