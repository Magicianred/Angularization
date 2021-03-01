import { Component, Input } from '@angular/core';

@Component({
  selector: 'demo-text',
  templateUrl: './demo-text.component.html',
  styleUrls: ['./demo-text.component.scss']
})
export class DemoTextComponent {
  @Input() light = false;
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'demo-text--light' : 'demo-text--dark';

    return [mode];
  }

}
