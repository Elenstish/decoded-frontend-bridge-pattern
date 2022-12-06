import { Component } from '@angular/core';
import {WIDGET} from "../widget.token";
import {Widget} from "../widget.interface";

@Component({
  selector: 'app-velocity-widget',
  templateUrl: './velocity-widget.component.html',
  styleUrls: ['./velocity-widget.component.css'],
  providers: [
    {
      provide: WIDGET,
      useExisting: VelocityWidgetComponent,
    },
  ]
})
export class VelocityWidgetComponent implements Widget {
  isRefreshing = false;

  public refresh(): void {
    this.isRefreshing = true;
    setTimeout(() => {
      this.isRefreshing = false;
    }, 2500);
  }
}
