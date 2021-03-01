import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontSize } from 'src/app/px-footer/font-size/font-size.enum';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent extends ThemeChangeComponent {
  constructor() {
    super();
  }

  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }
}
