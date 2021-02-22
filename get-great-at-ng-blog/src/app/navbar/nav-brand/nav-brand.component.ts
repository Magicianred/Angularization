import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-brand',
  templateUrl: './nav-brand.component.html',
  styleUrls: ['./nav-brand.component.scss']
})
export class NavBrandComponent implements OnInit {
  
  @Input() light = false;
  @Input() label = '';
  
  constructor() { }

  ngOnInit(): void {
  }

}
