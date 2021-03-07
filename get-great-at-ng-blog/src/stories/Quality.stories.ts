import { Meta, Story } from '@storybook/angular/types-6-0';
import { QualityComponent } from '../app/px-footer/quality/quality.component';
import { Fidelity } from '../app/px-footer/quality/fidelity.enum';

export default {
  title: 'PxFooter/Quality',
  component: QualityComponent,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<QualityComponent> = (args: QualityComponent) => ({
  component: QualityComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, fidelity: Fidelity.Normal };

export const Dark = Template.bind({});
Dark.args = { fidelity: Fidelity.Normal };
