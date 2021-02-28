import { Meta, Story } from '@storybook/angular/types-6-0';
import { ThemeButtonComponent } from '../app/px-footer/theme-button/theme-button.component';

export default {
  title: 'PXFooter/ThemeButton',
  component: ThemeButtonComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<ThemeButtonComponent> = (args: ThemeButtonComponent) => ({
  component: ThemeButtonComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, label: '💡' };

export const Dark = Template.bind({});
Dark.args = { label: '🌙' };