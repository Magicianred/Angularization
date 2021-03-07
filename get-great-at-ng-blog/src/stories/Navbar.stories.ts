import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';
import { NavBrandComponent } from '../app/navbar/nav-brand/nav-brand.component';
import { AppComponent } from 'src/app/app.component';
import { PxFooterComponent } from 'src/app/px-footer/px-footer.component';
import { FontSizeComponent } from 'src/app/px-footer/font-size/font-size.component';
import { QualityComponent } from 'src/app/px-footer/quality/quality.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';
import { ThemeButtonComponent } from 'src/app/px-footer/theme-button/theme-button.component';
import { DemoTextComponent } from 'src/app/demo-text/demo-text.component';
import { LoFiComponent } from 'src/app/lo-fi/lo-fi.component';
import { DocumentComponent } from 'src/app/page/document/document.component';
import { HomeComponent } from 'src/app/articles/home/home.component';
import { AboutComponent } from 'src/app/articles/about/about.component';
import { IndexComponent } from 'src/app/articles/angularization/index/index.component';
import { NvmComponent } from 'src/app/articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from 'src/app/articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from 'src/app/articles/angularization/vtdd-angular/vtdd-angular.component';
import { GetGreatComponent } from 'src/app/articles/get-great/get-great.component';
import PageComponent from 'src/app/page/page.component';
import { ContactComponent } from 'src/app/articles/contact/contact.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';

export default {
  title: 'Navbar/Navbar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        AppComponent,
        NavbarComponent,
        NavItemComponent,
        NavBrandComponent,
        PxFooterComponent,
        FontSizeComponent,
        QualityComponent,
        BgImageComponent,
        ThemeButtonComponent,
        DemoTextComponent,
        LoFiComponent,
        DocumentComponent,
        HomeComponent,
        AboutComponent,
        IndexComponent,
        NvmComponent,
        VsCodeComponent,
        VtddAngularComponent,
        GetGreatComponent,
        PageComponent,
        ContactComponent,
      ],
      imports: [
        CommonModule,
        AppRoutingModule,
        RouterModule.forRoot(
          [
            {
              path: '',
              loadChildren: () =>
                import('../app/app.module').then((m) => m.AppModule),
            },
          ],
          {
            useHash: true,
          }
        ),
      ],
      providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

const navItemsData = [
  { name: '❓ About', route: '/about' },
  { name: '📐 Angularization', route: '/angularization' },
  { name: '✉ Contact', route: '/contact' },
];

export const Light = Template.bind({});
Light.args = { light: true, brand: 'A°', navItems: navItemsData };

export const Dark = Template.bind({});
Dark.args = { light: false, brand: 'A°', navItems: navItemsData };
