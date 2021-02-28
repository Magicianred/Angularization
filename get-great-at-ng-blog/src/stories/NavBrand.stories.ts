import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavBrandComponent } from '../app/navbar/nav-brand/nav-brand.component';

export default {
  title: 'Navbar/NavBrand',
  component: NavBrandComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavBrandComponent> = (args: NavBrandComponent) => ({
  component: NavBrandComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, label: 'A°' };

export const Dark = Template.bind({});
Dark.args = { label: 'A°' };