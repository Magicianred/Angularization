import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { INavModel } from 'src/app/navbar/nav.model';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() navModel: INavModel = { light: false, label: '' }
  @Input() backgroundColor?: string;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.navModel.light ? 'nav-item--light' : 'nav-item--dark';

    return ['nav-item', mode];
  }
}
