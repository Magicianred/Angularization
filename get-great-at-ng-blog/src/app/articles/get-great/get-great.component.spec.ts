import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetGreatComponent } from './get-great.component';

describe('GetGreatComponent', () => {
  let component: GetGreatComponent;
  let fixture: ComponentFixture<GetGreatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetGreatComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetGreatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
