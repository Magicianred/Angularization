import { Component, ElementRef, EventEmitter, Input, Output } from '@angular/core';
import { FontSize } from './font-size.enum';

@Component({
  selector: 'font-size',
  templateUrl: './font-size.component.html',
  styleUrls: ['./font-size.component.scss']
})
export class FontSizeComponent {
  constructor(private _elementRef : ElementRef) {}
  @Input() light = false;
  @Input() fontSize: FontSize = 0;
  @Input() backgroundColor?: string;
  @Input() label = '';

  @Output() onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.light ? 'font-size--light' : 'font-size--dark';

    return ['font-size', mode];
  }

  selectFontSize(fs: FontSize) { 
    /* const domElement = this._elementRef.nativeElement.querySelector('body');

    if (this.fontSize < fs && fs === 1) domElement.style.fontSize += 12;
    else if (this.fontSize < fs && fs === 0) domElement.style.fontSize += 6;
    else if (this.fontSize > fs && fs === -1) domElement.style.fontSize -= 12;
    else if (this.fontSize > fs && fs === 0) domElement.style.fontSize -= 6; */
    
    this.fontSize = fs;
  }
}
