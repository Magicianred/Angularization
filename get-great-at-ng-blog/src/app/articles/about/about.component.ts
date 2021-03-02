import { Component, Input } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent extends ThemeChangeComponent { 
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'nav-item--light' : 'nav-item--dark';

    return ['nav-item', mode];
  }
}
