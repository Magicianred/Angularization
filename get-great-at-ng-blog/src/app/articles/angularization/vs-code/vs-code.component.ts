import { Component, Input } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-vs-code',
  templateUrl: './vs-code.component.html',
  styleUrls: [
    '../../../page/document/document.component.scss',
    './vs-code.component.scss',
  ],
})
export class VsCodeComponent extends ThemeChangeComponent {
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }
}
