import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoFiComponent } from './lo-fi.component';

describe('LoFiComponent', () => {
  let component: LoFiComponent;
  let fixture: ComponentFixture<LoFiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoFiComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoFiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
