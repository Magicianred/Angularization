import { Component, Input, OnInit } from '@angular/core';
import { NavItemComponent } from './nav-item/nav-item.component';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() light = false;
  @Input() backgroundColor?: string;
  @Input() navItems: string[] = [];

  public get classes(): string[] {
    const mode = this.light ? 'navbar--light' : 'navbar--dark';

    return ['navbar', mode];
  }

  constructor() { }

  ngOnInit(): void {
  }

}
