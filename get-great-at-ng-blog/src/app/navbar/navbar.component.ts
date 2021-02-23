import { Component, Input, OnInit } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';
import { NavBrandComponent } from './nav-brand/nav-brand.component';
import type { INavModel } from 'src/app/navbar/nav.model';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() navModel: INavModel = { light: false, label: '' };
  @Input() backgroundColor?: string;
  @Input() navItems: string[] = [];

  public get classes(): string[] {
    const mode = this.navModel.light ? 'navbar--light' : 'navbar--dark';

    return ['navbar', mode];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
