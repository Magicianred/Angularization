import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { PxFooterComponent } from 'src/app/px-footer/px-footer.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';
import { FontSizeComponent } from 'src/app/px-footer/font-size/font-size.component';
import { QualityComponent } from 'src/app/px-footer/quality/quality.component';
import { ThemeButtonComponent } from 'src/app/px-footer/theme-button/theme-button.component';
import { DemoTextComponent } from 'src/app/demo-text/demo-text.component';
import { FontSize } from 'src/app/px-footer/font-size/font-size.enum';
import { Fidelity } from 'src/app/px-footer/quality/fidelity.enum';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';
import { LoFiComponent } from 'src/app/lo-fi/lo-fi.component';
import { DocumentComponent } from 'src/app/page/document/document.component';
import { LightService } from '../articles/light.service';
import { Router } from '@angular/router'

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  providers: [LightService],
  styleUrls: ['./page.component.scss'],
})
export default class PageComponent extends ThemeChangeComponent {
  @Input() brand = '';
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() backgroundColor?: string;
  @Input() navItems = [{name: '', route: ''}];;

  public get classes(): string[] {
    const mode = this.light ? 'page--light' : 'page--dark';

    return ['page', mode];
  }

  constructor(public router: Router) { super() }

  changeTheme(light: boolean) { 
    this.light = light;
  }
}
