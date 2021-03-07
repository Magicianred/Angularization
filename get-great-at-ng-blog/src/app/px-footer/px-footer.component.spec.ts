import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PxFooterComponent } from './px-footer.component';

describe('PxFooterComponent', () => {
  let component: PxFooterComponent;
  let fixture: ComponentFixture<PxFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PxFooterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PxFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
