import { Input } from '@angular/core';

export class ThemeChangeComponent {
  @Input() light = false;

  changeTheme(light: boolean) {
    this.light = !light;
  }
}
