import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { MockComponent } from 'ng-mocks';

import { PublicHolidayMonthListComponent } from './components/public-holiday-month-list/public-holiday-month-list.component';
import { PublicHolidayComponent } from './public-holiday.component';

describe('PublicHolidayComponent', () => {
  let component: PublicHolidayComponent;
  let fixture: ComponentFixture<PublicHolidayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicHolidayComponent, MockComponent(PublicHolidayMonthListComponent)],
      providers: [
        provideMockStore({
          initialState: {
            monthHolidays: [],
          },
        }),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHolidayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
