import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { screen } from '@testing-library/dom';
import { of } from 'rxjs';

import { PublicHolidayMonthComponent } from './public-holiday-month.component';

describe('PublicHolidayMonthComponent', () => {
  let component: PublicHolidayMonthComponent;
  let fixture: ComponentFixture<PublicHolidayMonthComponent>;
  let store: Store;
  const holiday = {
    date: new Date('2019-01-01'),
    localName: 'New Years Day',
    name: 'New Years Day',
    countryCode: 'US',
    fixed: false,
    global: true,
    counties: null,
    launchYear: null,
    type: 'Public',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PublicHolidayMonthComponent],
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
    fixture = TestBed.createComponent(PublicHolidayMonthComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should expect have one month holiday', fakeAsync(() => {
    const spyStore = jest.spyOn(store, 'select').mockReturnValue(of([holiday]));

    fixture.detectChanges();
    tick();
    expect(component.monthHolidays).toHaveLength(1);
    expect(spyStore).toHaveBeenCalled();
  }));

  it('should expect render holiday month with one holiday', fakeAsync(() => {
    const spyStore = jest.spyOn(store, 'select').mockReturnValue(of([holiday]));

    fixture.detectChanges();
    tick();
    const element = screen.getByTestId('month-list').querySelectorAll('li');

    expect(spyStore).toHaveBeenCalled();
    expect(element).toHaveLength(1);
    expect(element.item(0).textContent).toContain(component.monthHolidays[0].name);
    expect(component.monthHolidays).toHaveLength(1);
  }));
});
