import { Component, Input, Output, EventEmitter  } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';
import { Fidelity } from './fidelity.enum';

@Component({
  selector: 'quality',
  templateUrl: './quality.component.html',
  styleUrls: ['./quality.component.scss']
})
export class QualityComponent extends ThemeChangeComponent {
  @Input() backgroundColor?: string;

  @Output() onFidelitySelection = new EventEmitter<Fidelity>();

  public get classes(): string[] {
    const mode = this.light ? 'quality--light' : 'quality--dark';

    return ['quality', mode];
  }

  selectFidelity(fi: Fidelity) { 
    this.fidelity = fi 
    this.onFidelitySelection.emit(this.fidelity);
  }
}
