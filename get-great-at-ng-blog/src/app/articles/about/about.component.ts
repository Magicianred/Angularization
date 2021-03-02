import { Component, Input } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../page/document/document.component.scss', './about.component.scss']
})
export class AboutComponent extends ThemeChangeComponent { 
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }
}
