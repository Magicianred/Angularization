import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['../../../page/document/document.component.scss', './index.component.scss']
})
export class IndexComponent extends ThemeChangeComponent implements OnInit  {
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'document--light' : 'document--dark';

    return ['document', mode];
  }

  ngOnInit() {}

}
