import { Component, Input, OnInit } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-nvm',
  templateUrl: './nvm.component.html',
  styleUrls: [
    '../../../page/document/document.component.scss',
    './nvm.component.scss',
  ],
})
export class NvmComponent extends ThemeChangeComponent {
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }
}
