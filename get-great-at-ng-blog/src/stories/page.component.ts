import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';

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
  <!-- <article>
    <section>
    </section>
  </article> -->`,
  styleUrls: ['./page.css'],
})
export default class PageComponent {
  @Input() light = false;
  @Input() brand = '';
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
