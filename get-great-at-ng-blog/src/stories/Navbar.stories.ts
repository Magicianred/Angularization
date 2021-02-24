import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';
import { NavBrandComponent } from '../app/navbar/nav-brand/nav-brand.component';
import type { INavModel } from 'src/app/navbar/nav.model';

export default {
  title: 'Example/Navbar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent, NavBrandComponent, NavItemComponent],
      imports: [CommonModule],
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

export const navItemsData =  
  [ '❓ About', '📐 Angularization', '💪 Get Great' ];

let navModel: INavModel = { light: true, label: 'A°' };

export const Light = Template.bind({});
Light.args = { navModel, navItems: navItemsData };

navModel = { light: false, label: 'A°' };

export const Dark = Template.bind({})
Dark.args = { navModel, navItems: navItemsData };