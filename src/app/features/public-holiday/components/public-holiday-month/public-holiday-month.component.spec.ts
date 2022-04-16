import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHolidayMonthComponent } from './public-holiday-month.component';

describe('PublicHolidayMonthComponent', () => {
  let component: PublicHolidayMonthComponent;
  let fixture: ComponentFixture<PublicHolidayMonthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicHolidayMonthComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHolidayMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
