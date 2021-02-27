import { Meta, Story } from '@storybook/angular/types-6-0';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';

export default {
  title: 'Example/FontSize',
  component: FontSizeComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<FontSizeComponent> = (args: FontSizeComponent) => ({
  component: FontSizeComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, label: 'AAA' };

export const Dark = Template.bind({});
Dark.args = { label: 'AAA' };