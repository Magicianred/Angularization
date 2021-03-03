import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../app/navbar/navbar.component';
import { NavItemComponent } from '../app/navbar/nav-item/nav-item.component';
import { NavBrandComponent } from '../app/navbar/nav-brand/nav-brand.component';

export default {
  title: 'Navbar/Navbar',
  excludeStories: /.*Data$/,
  decorators: [
    moduleMetadata({
      declarations: [NavbarComponent, NavBrandComponent, NavItemComponent],
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

const navItemsData = [ 
  { name: '❓ About', route: '\/about'},  
  { name: '📐 Angularization', route: '\/angularization'}, 
  { name: '✉ Contact', route: '\/contact'} 
];

export const Light = Template.bind({});
Light.args = { light: true, brand: 'A°', navItems: navItemsData };

export const Dark = Template.bind({})
Dark.args = { light: false, brand: 'A°', navItems: navItemsData };
