import { Component, OnInit } from '@angular/core';
import { FontSize } from './px-footer/font-size/font-size.enum';
import { Fidelity } from './px-footer/quality/fidelity.enum';
import PageComponent from './page/page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'get-great-at-ng-blog';
  light = true; 
  brand = 'O';
  fontSize = FontSize.Normal;
  fidelity = Fidelity.Normal; 
  navItems = [ 
    { name: '❓ About', route: '\/about'},  
    { name: '📐 Angularization', route: '\/angularization'}, 
    { name: '✉ Contact', route: '\/contact'} 
  ]; 

  ngOnInit() {  
    history.pushState({light: true }, '', ''); 
  }
}

