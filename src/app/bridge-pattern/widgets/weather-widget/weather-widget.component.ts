import { Component } from '@angular/core';
import {WIDGET} from "../widget.token";
import {Widget} from "../widget.interface";

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: WeatherWidgetComponent,
    },
  ],
})
export class WeatherWidgetComponent implements Widget {
  isLoading = false;

  public refresh(): void {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }
}
