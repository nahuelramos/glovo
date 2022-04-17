import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockComponent } from 'ng-mocks';

import { PublicHolidayMonthComponent } from '../public-holiday-month/public-holiday-month.component';
import { PublicHolidayMonthListComponent } from './public-holiday-month-list.component';

describe('PublicHolidayMonthListComponent', () => {
  let component: PublicHolidayMonthListComponent;
  let fixture: ComponentFixture<PublicHolidayMonthListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicHolidayMonthListComponent, MockComponent(PublicHolidayMonthComponent)],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHolidayMonthListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
