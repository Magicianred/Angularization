import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.scss']
})
export class NavBrandComponent {
  
  @Input() light = false;
  @Input() backgroundColor?: string;
  @Input() label = '';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.light ? 'nav-brand--light' : 'nav-brand--dark';

    return ['nav-brand', mode];
  }

}
