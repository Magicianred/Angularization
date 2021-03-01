import { Input } from '@angular/core';
import { FontSize } from '../px-footer/font-size/font-size.enum';
import { Fidelity } from '../px-footer/quality/fidelity.enum';

export class ThemeChangeComponent {
  constructor() { 
    this.show = this.fidelity === Fidelity.Normal || this.fidelity === Fidelity.High;
  }

  @Input() light = false;
  @Input() fontSize: FontSize = FontSize.Normal;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  show: boolean;

  changeTheme(light: boolean) { this.light = light; }
  changeFontSize(size: FontSize) { this.fontSize = size; }
  changeFidelity(fi: Fidelity) { 
    this.fidelity = fi;
    this.show = this.fidelity === Fidelity.Normal || this.fidelity === Fidelity.High; 
  }
}
