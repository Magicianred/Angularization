import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { FontSizeComponent } from './font-size/font-size.component';
import { QualityComponent } from './quality/quality.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { Router } from '@angular/router';
import { FontSize } from './font-size/font-size.enum';
import { Fidelity } from './quality/fidelity.enum';

@Component({
  selector: 'px-footer',
  templateUrl: './px-footer.component.html',
  styleUrls: ['./px-footer.component.scss'],
})
export class PxFooterComponent {
  constructor(private router: Router) {}

  @Input() light = false;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() fontSize: FontSize = FontSize.Normal;
  @Input() backgroundColor?: string;

  @Output() onThemeChange = new EventEmitter<boolean>();
  @Output() onFontSizeChange = new EventEmitter<FontSize>();
  @Output() onFidelityChange = new EventEmitter<Fidelity>();

  public get classes(): string[] {
    const mode = this.light ? 'footer--light' : 'footer--dark';

    return ['footer', mode];
  }

  changeFontSize(s: FontSize) {
    this.fontSize = s;
    this.onFontSizeChange.emit(this.fontSize);
  }

  changeFidelity(fi: Fidelity) {
    this.fidelity = fi;
    this.onFidelityChange.emit(this.fidelity);
  }

  toggleTheme() {
    this.light = !this.light;
    this.onThemeChange.emit(this.light);
  }

  static code() {
    const file = new File([], '../app/px-footer/px-footer.component.ts');
    return new Promise(() => file.text()).then((words) => words);
  }
}
