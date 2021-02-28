import { Component, Input } from '@angular/core';
import { Fidelity } from './fidelity.enum';

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent {
  @Input() light = false;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'quality--light' : 'quality--dark';

    return ['quality', mode];
  }

  selectFontSize(f: Fidelity) {
    this.fidelity = f;
  }
}
