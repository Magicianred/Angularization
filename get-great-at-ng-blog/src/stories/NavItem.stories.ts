import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';

export default {
  title: 'Navbar/NavItem',
  component: NavItemComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavItemComponent> = (args: NavItemComponent) => ({
  component: NavItemComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, label: '💡 NavItem' };

export const Dark = Template.bind({});
Dark.args = { label: '🌙 NavItem' };
