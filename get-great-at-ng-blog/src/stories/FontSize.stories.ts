import { Meta, Story } from '@storybook/angular/types-6-0';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';
import { FontSize } from '../app/px-footer/font-size/font-size.enum';

export default {
  title: 'PXFooter/FontSize',
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
Light.args = { light: true, fontSize: FontSize.Normal , label: 'AAA' };

export const Dark = Template.bind({});
Dark.args = { fontSize: FontSize.Normal, label: 'AAA' };