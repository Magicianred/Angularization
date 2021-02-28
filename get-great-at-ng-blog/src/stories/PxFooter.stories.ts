import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { PxFooterComponent } from '../app/px-footer/px-footer.component';
import { FontSizeComponent } from '../app/px-footer/font-size/font-size.component';
import { QualityComponent } from '../app/px-footer/quality/quality.component';
import { ThemeButtonComponent } from '../app/px-footer/theme-button/theme-button.component';
import { FontSize } from '../app/px-footer/font-size/font-size.enum';
import { Fidelity } from '../app/px-footer/quality/fidelity.enum';

export default {
  title: 'PxFooter/PxFooter',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [
        PxFooterComponent, 
        FontSizeComponent, 
        QualityComponent,
        ThemeButtonComponent,
      ],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<PxFooterComponent> = (args: PxFooterComponent) => ({
  component: PxFooterComponent,
  props: args,
});

export const Light = Template.bind({});
Light.args = { light: true, fidelity: Fidelity.Normal, fontSize: FontSize.Normal };

export const Dark = Template.bind({})
Dark.args = { light: false, fidelity: Fidelity.Normal, fontSize: FontSize.Normal };
