import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-image',
  templateUrl: './bg-image.component.html',
  styleUrls: ['./bg-image.component.scss']
})
export class BgImageComponent {
  @Input() light = false;
  @Input() backgroundColor?: string;
  @Input() navItems: string[] = [];

  public get classes(): string[] {
    const mode = this.light ? 'bg-image--light' : 'bg-image--dark';

    return [mode];
  }
}
