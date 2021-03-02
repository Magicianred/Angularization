import { Component, Input, OnChanges, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { ThemeChangeComponent } from 'src/app/theme-change/theme-change.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class HomeComponent extends ThemeChangeComponent implements OnInit {
  @Input() backgroundColor?: string;

  public get classes(): string[] {
    const mode = this.light ? 'home--light' : 'home--dark';

    return ['home'];
  }

  ngOnInit() {
    this.light = history.state.data ? history.state.data.light : true;
    console.log(history.state.data);
  }
}
