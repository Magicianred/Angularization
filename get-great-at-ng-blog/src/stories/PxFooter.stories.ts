import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { PxFooterComponent } from '../app/px-footer/px-footer.component';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';
import { QualityComponent } from '../app/px-footer/quality/quality.component';
import { ThemeButtonComponent } from '../app/px-footer/theme-button/theme-button.component';
import { FontSize } from '../app/px-footer/font-size/font-size.enum';
import { Fidelity } from '../app/px-footer/quality/fidelity.enum';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/articles/home/home.component';
import { AboutComponent } from 'src/app/articles/about/about.component';
import { IndexComponent } from 'src/app/articles/angularization/index/index.component';
import { NvmComponent } from 'src/app/articles/angularization/nvm/nvm.component';
import { VsCodeComponent } from 'src/app/articles/angularization/vs-code/vs-code.component';
import { VtddAngularComponent } from 'src/app/articles/angularization/vtdd-angular/vtdd-angular.component';
import { GetGreatComponent } from 'src/app/articles/get-great/get-great.component';
import PageComponent from 'src/app/page/page.component';
import { ContactComponent } from 'src/app/articles/contact/contact.component';
import { AppComponent } from 'src/app/app.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { NavItemComponent } from 'src/app/navbar/nav-item/nav-item.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';
import { DemoTextComponent } from 'src/app/demo-text/demo-text.component';
import { LoFiComponent } from 'src/app/lo-fi/lo-fi.component';
import { DocumentComponent } from 'src/app/page/document/document.component';
import { NavBrandComponent } from 'src/app/navbar/nav-brand/nav-brand.component';

export default {
  title: 'PxFooter/PxFooter',
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
  parameters: {
    docs: {
      source: 'code',
    },
    storySource: {
      source: `
      // px-footer.component.ts

      ${PxFooterComponent.code()}
`,
    },
  },
} as Meta;

const Template: Story<PxFooterComponent> = (args: PxFooterComponent) => ({
  component: PxFooterComponent,
  props: args,
  parameters: {
    storySource: {
      source: `
      // px-footer.component.ts

      ${PxFooterComponent.code()}
`,
    },
  },
});

export const Light = Template.bind({});
Light.args = {
  light: true,
  fidelity: Fidelity.Normal,
  fontSize: FontSize.Normal,
};

export const Dark = Template.bind({});
Dark.args = {
  light: false,
  fidelity: Fidelity.Normal,
  fontSize: FontSize.Normal,
};
