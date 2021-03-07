import { Component, Input } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-vtdd-angular',
  templateUrl: './vtdd-angular.component.html',
  styleUrls: [
    '../../../page/document/document.component.scss',
    './vtdd-angular.component.scss',
  ],
})
export class VtddAngularComponent extends ThemeChangeComponent {
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }
}
