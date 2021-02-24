import { Component, Input, Output, EventEmitter } from '@angular/core';
import type { INavModel } from 'src/app/navbar/nav.model';

@Component({
  selector: 'nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.scss']
})
export class NavBrandComponent {
  
  @Input() navModel: INavModel = { light: false, label: '' };
  @Input() backgroundColor?: string;

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.navModel.light ? 'nav-brand--light' : 'nav-brand--dark';

    return ['nav-brand', mode];
  }

}
