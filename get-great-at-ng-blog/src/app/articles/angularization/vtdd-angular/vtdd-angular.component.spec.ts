import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtddAngularComponent } from './vtdd-angular.component';

describe('VtddAngularComponent', () => {
  let component: VtddAngularComponent;
  let fixture: ComponentFixture<VtddAngularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VtddAngularComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VtddAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
