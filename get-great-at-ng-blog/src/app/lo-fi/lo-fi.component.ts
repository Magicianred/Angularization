import { Component, Input } from '@angular/core';
import { DemoTextComponent } from '../demo-text/demo-text.component';
import { AboutComponent } from '../articles/about/about.component';

@Component({
  selector: 'lo-fi',
  templateUrl: './lo-fi.component.html',
  styleUrls: ['./lo-fi.component.scss'],
})
export class LoFiComponent {
  @Input() light = false;
}
