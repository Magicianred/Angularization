import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';

export default {
  title: 'Example/Navbar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent, NavItemComponent],
      imports: [CommonModule],
    }),
  ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta;

const Template: Story<NavbarComponent> = (args: NavbarComponent) => ({
  component: NavbarComponent,
  props: args,
});

export const navItemsData =  
  [ '🤷‍♂️ Why A°?', '📐 Angular', '📖 Storybook' ];

export const Light = Template.bind({});
Light.args = { light: true, navItems: navItemsData };

export const Dark = Template.bind({})
Dark.args = { light: false, navItems: navItemsData };