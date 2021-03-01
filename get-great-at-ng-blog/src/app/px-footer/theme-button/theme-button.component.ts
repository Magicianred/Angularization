import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'theme-button',
  templateUrl: './theme-button.component.html',
  styleUrls: ['./theme-button.component.scss']
})
export class ThemeButtonComponent {
  @Input() light = false;
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'theme-button--light' : 'theme-button--dark';

    return ['theme-button', mode];
  }
}
