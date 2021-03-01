import { Input } from '@angular/core';
import { FontSize } from '../px-footer/font-size/font-size.enum';

export class ThemeChangeComponent {
  @Input() light = false;
  @Input() fontSize: FontSize = FontSize.Normal;

  changeTheme(light: boolean) { this.light = light; }

  changeFontSize(size: FontSize) { this.fontSize = size; }
}
