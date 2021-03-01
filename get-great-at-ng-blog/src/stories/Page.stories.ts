import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Page from './page.component';

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

export default {
  title: 'Example/Page',
  component: Page,
  decorators: [
    moduleMetadata({
      declarations: [
        NavbarComponent, 
        NavBrandComponent, 
        NavItemComponent,
        PxFooterComponent,
        BgImageComponent,
        FontSizeComponent,
        QualityComponent,
        ThemeButtonComponent,
        DemoTextComponent
      ],
      imports: [CommonModule],
    }),
  ],
} as Meta;

const Template: Story<Page> = (args: Page) => ({
  component: Page,
  props: args,
});

const navItemsData =  
  [ '❓ About', '📐 Angularization', '💪 Get Great' ];

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
