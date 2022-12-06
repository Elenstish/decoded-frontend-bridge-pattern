import {Component, ContentChild, Input} from '@angular/core';

import {Widget} from "../widgets/widget.interface";
import {WIDGET} from "../widgets/widget.token";

@Component({
  selector: 'app-widget-wrapper',
  templateUrl: './widget-wrapper.component.html',
  styleUrls: ['./widget-wrapper.component.css']
})
export class WidgetWrapperComponent {
  @ContentChild(WIDGET as any, { static: true })
  widget: Widget;

  @Input()
  title: string = '';

  public onRefresh(): void {
    this.widget.refresh();
  }
}
