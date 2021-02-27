import { Meta, Story } from '@storybook/angular/types-6-0';
import { BgImageComponent } from '../app/bg-image/bg-image.component';

export default {
  title: 'Example/BgImage',
  component: BgImageComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<BgImageComponent> = (args: BgImageComponent) => ({
  component: BgImageComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true };

export const Dark = Template.bind({});
Dark.args = { light: false };