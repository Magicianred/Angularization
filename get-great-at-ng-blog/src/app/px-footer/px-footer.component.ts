import { Component, Input } from '@angular/core';
import { FontSizeComponent } from './font-size/font-size.component';
import { QualityComponent } from './quality/quality.component';
import { ThemeButtonComponent } from './theme-button/theme-button.component';
import { FontSize } from './font-size/font-size.enum';
import { Fidelity } from './quality/fidelity.enum';

@Component({
  selector: 'px-footer',
  templateUrl: './px-footer.component.html',
  styleUrls: ['./px-footer.component.scss']
})
export class PxFooterComponent {
  @Input() light = false;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() fontSize: FontSize = FontSize.Normal;
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'footer--light' : 'footer--dark';

    return ['footer', mode];
  }
}
