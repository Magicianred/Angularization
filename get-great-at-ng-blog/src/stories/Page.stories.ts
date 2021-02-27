import { moduleMetadata } from '@storybook/angular';
import { CommonModule } from '@angular/common';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/angular/types-6-0';
import Page from './page.component';

import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { NavBrandComponent } from 'src/app/navbar/nav-brand/nav-brand.component';
import { NavItemComponent } from 'src/app/navbar/nav-item/nav-item.component';
import { BgImageComponent } from 'src/app/bg-image/bg-image.component';

export default {
  title: 'Example/Page',
  component: NavbarComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        NavbarComponent, 
        NavBrandComponent, 
        NavItemComponent,
        BgImageComponent
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
Light.args = { light: true, brand: 'A°', navItems: navItemsData };

export const Dark = Template.bind({})
Dark.args = { light: false, brand: 'A°', navItems: navItemsData };
