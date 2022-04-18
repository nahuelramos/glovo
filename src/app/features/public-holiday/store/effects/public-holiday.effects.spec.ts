import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of, Subject } from 'rxjs';

import { PublicHolidayService } from '@/api/services/public-holiday/public-holiday.service';

import * as PublicHolidayActions from '../actions/public-holiday.actions';
import { PublicHolidayEffects } from './public-holiday.effects';

describe('PublicHolidayEffects', () => {
  let service: PublicHolidayEffects;
  let actions$: Subject<Action>;
  let effects: PublicHolidayEffects;
  const publicHolidayServiceStub: Partial<PublicHolidayService> = {
    retrievePublicHolidays: jest.fn().mockReturnValue(
      of([
        {
          date: new Date('2019-01-01'),
          localName: 'New Years Day',
          name: 'New Years Day',
          countryCode: 'US',
          fixed: false,
          global: true,
          counties: null,
          launchYear: null,
          type: 'Public',
        },
      ])
    ),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({}),
        provideMockActions(() => actions$),
        {
          provide: PublicHolidayService,
          useValue: publicHolidayServiceStub,
        },
      ],
    });
    service = TestBed.inject(PublicHolidayEffects);
    effects = TestBed.inject<PublicHolidayEffects>(PublicHolidayEffects);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch public holidays in the store', fakeAsync(() => {
    expect(service).toBeTruthy();
    actions$ = new Subject();
    actions$.next(PublicHolidayActions.getPublicHolidays);

    tick();
    effects.loadPublicHolidays$.subscribe({
      next: (action) => {
        expect(action).toEqual({
          type: effects.loadPublicHolidays$,
          pubpublicHolidays: [
            {
              date: new Date('2019-01-01'),
              localName: 'New Years Day',
              name: 'New Years Day',
              countryCode: 'US',
              fixed: false,
              global: true,
              counties: null,
              launchYear: null,
              type: 'Public',
            },
          ],
        });
      },
    });
  }));
});
