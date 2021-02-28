import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { PxFooterComponent } from 'src/app/px-footer/px-footer.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';
import { QualityComponent } from '../app/px-footer/quality/quality.component';
import { ThemeButtonComponent } from '../app/px-footer/theme-button/theme-button.component';
import { FontSize } from '../app/px-footer/font-size/font-size.enum';
import { Fidelity } from '../app/px-footer/quality/fidelity.enum';

@Component({
  selector: 'a-degree-page',
  template: `
  <navbar 
    [brand]="brand"
    [light]="light"
    [navItems]="navItems"
    [ngClass]="classes" 
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  </navbar>
  <bg-image
    [light]="light"
    [ngClass]="classes" 
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  </bg-image>
  <br>
  <br>
  <br>
  <px-footer 
    [light]="light"
    [fontSize]="0"
    [fidelity]="0"
    [ngClass]="classes" 
    [ngStyle]="{ 'background-color': backgroundColor }"
  >
  </px-footer>
    `,
  styleUrls: ['./page.css'],
})
export default class PageComponent {
  @Input() light = false;
  @Input() brand = '';
  @Input() fontSize: FontSize = FontSize.Normal;
  @Input() fidelity: Fidelity = Fidelity.Normal;
  @Input() backgroundColor?: string;
  @Input() navItems: string[] = [];

  public get classes(): string[] {
    const mode = this.light ? 'page--light' : 'page--dark';

    return ['page', mode];
  }
}

// export const Page = ({ user, onLogin, onLogout, onCreateAccount }) => (
//   <article>
//     <Header user={user} onLogin={onLogin} onLogout={onLogout} onCreateAccount={onCreateAccount} />

// );
// Page.propTypes = {
//   user: PropTypes.shape({}),
//   onLogin: PropTypes.func.isRequired,
//   onLogout: PropTypes.func.isRequired,
//   onCreateAccount: PropTypes.func.isRequired,
// };

// Page.defaultProps = {
//   user: null,
// };
