import { moduleMetadata } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Page from 'src/app/page/page.component';

import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { NavBrandComponent } from 'src/app/navbar/nav-brand/nav-brand.component';
import { NavItemComponent } from 'src/app/navbar/nav-item/nav-item.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';
import { QualityComponent } from '../app/px-footer/quality/quality.component';
import { ThemeButtonComponent } from '../app/px-footer/theme-button/theme-button.component';
import { FontSize } from '../app/px-footer/font-size/font-size.enum';
import { Fidelity } from '../app/px-footer/quality/fidelity.enum';
import { PxFooterComponent } from 'src/app/px-footer/px-footer.component';
import { DemoTextComponent } from 'src/app/demo-text/demo-text.component';
import { DocumentComponent } from 'src/app/page/document/document.component';
import { AppModule } from 'src/app/app.module';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import PageComponent from 'src/app/page/page.component';
import { HomeComponent } from 'src/app/articles/home/home.component';
import { AboutComponent } from 'src/app/articles/about/about.component';
import { AppComponent } from 'src/app/app.component';
import { LoFiComponent } from 'src/app/lo-fi/lo-fi.component';
import { IndexComponent } from 'src/app/articles/angularization/index/index.component';
import { NvmComponent } from 'src/app/articles/angularization/nvm/nvm.component';
import { VtddAngularComponent } from 'src/app/articles/angularization/vtdd-angular/vtdd-angular.component';
import { GetGreatComponent } from 'src/app/articles/get-great/get-great.component';
import { VsCodeComponent } from 'src/app/articles/angularization/vs-code/vs-code.component';
import { ContactComponent } from 'src/app/articles/contact/contact.component';

export default {
  title: 'Example/App',
  component: AppComponent,
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
        ContactComponent
      ],
      imports: [
        CommonModule,
        AppRoutingModule,
        RouterModule.forRoot([
          { path: '', loadChildren: () => import('../app/app.module').then(m => m.AppModule) }
        ], {
          useHash: true
        })
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/'}
      ]
    }),
  ],
} as Meta;

const Template: Story<AppComponent> = (args: AppComponent) => ({
  component: AppComponent,
  props: args,
});

const navItemsData = [ 
  { name: '❓ About', route: '\/about'},  
  { name: '📐 Angularization', route: '\/angularization'}, 
  { name: '✉ Contact', route: '\/contact'} 
];

export const Light = Template.bind({});
Light.args = { 
  light: true, 
  brand: 'A°',
  fontSize: FontSize.Normal,
  fidelity: Fidelity.Normal, 
  navItems: navItemsData 
};

export const Dark = Template.bind({})
Dark.args = { 
  light: false, 
  brand: 'A°',
  fontSize: FontSize.Normal,
  fidelity: Fidelity.Normal, 
  navItems: navItemsData
};
