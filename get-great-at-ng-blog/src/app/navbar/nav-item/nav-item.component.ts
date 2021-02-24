import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent {
  @Input() light = false;
  @Input() backgroundColor?: string;
  @Input() label = '';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.light ? 'nav-item--light' : 'nav-item--dark';

    return ['nav-item', mode];
  }
}
