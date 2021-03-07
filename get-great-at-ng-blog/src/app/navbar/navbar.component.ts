import { Component, Input, OnInit } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavBrandComponent } from './nav-brand/nav-brand.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @Input() light = false;
  @Input() brand = '';
  @Input() backgroundColor?: string;
  @Input() navItems = [{ name: '', route: '' }];

  public get classes(): string[] {
    const mode = this.light ? 'navbar--light' : 'navbar--dark';

    return ['navbar', mode];
  }

  ngOnInit(): void {}
}
