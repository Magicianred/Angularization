import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';
import { FontSize } from './font-size.enum';

@Component({
  selector: 'font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss'],
})
export class FontSizeComponent extends ThemeChangeComponent {
  constructor() {
    super();
  }

  @Output() onFontSizeSelection = new EventEmitter<FontSize>();
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'font-size--light' : 'font-size--dark';

    return ['font-size', mode];
  }

  selectFontSize(s: FontSize) {
    this.fontSize = s;
    this.onFontSizeSelection.emit(this.fontSize);
  }
}
