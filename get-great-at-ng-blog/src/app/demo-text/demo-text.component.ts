import { Component, Input } from '@angular/core';
import { AboutComponent } from '../articles/about/about.component';
import { IndexComponent } from '../articles/angularization/index/index.component';
import { NvmComponent } from '../articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from '../articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from '../articles/angularization/vtdd-angular/vtdd-angular.component';
import { ContactComponent } from '../articles/contact/contact.component';

@Component({
  selector: 'demo-text',
  templateUrl: './demo-text.component.html',
  styleUrls: ['./demo-text.component.scss']
})
export class DemoTextComponent {
  @Input() light = false;
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'demo-text--light' : 'demo-text--dark';

    return [mode];
  }

}
