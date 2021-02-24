import { Meta, Story } from '@storybook/angular/types-6-0';
import { NavBrandComponent } from 'src/app/navbar/nav-brand/nav-brand.component';
import type { INavModel } from 'src/app/navbar/nav.model';

export default {
  title: 'Example/NavBrand',
  component: NavBrandComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavBrandComponent> = (args: NavBrandComponent) => ({
  component: NavBrandComponent,
  props: args,
});

let navModel: INavModel = { light: true, label: 'A°' };

export const Light = Template.bind({});
Light.args = { navModel };

navModel = { light: false, label: 'A°' };

export const Dark = Template.bind({});
Dark.args = { navModel };