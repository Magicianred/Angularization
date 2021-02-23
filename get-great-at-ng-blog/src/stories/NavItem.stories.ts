import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';
import type { INavModel } from 'src/app/navbar/nav.model';
import { navItemsData } from './Navbar.stories';

export default {
  title: 'Example/NavItem',
  component: NavItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavItemComponent> = (args: NavItemComponent) => ({
  component: NavItemComponent,
  props: args,
});

let navModel: INavModel = { light: true, label: '💡 NavItem' };

export const Light = Template.bind({});
Light.args = { navModel };

navModel = { light: false, label: '🌙 NavItem' }

export const Dark = Template.bind({});
Dark.args = { navModel };
