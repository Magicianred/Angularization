import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VsCodeComponent } from './vs-code.component';

describe('VsCodeComponent', () => {
  let component: VsCodeComponent;
  let fixture: ComponentFixture<VsCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VsCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VsCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
