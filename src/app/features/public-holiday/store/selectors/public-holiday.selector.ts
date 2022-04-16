/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { createFeatureSelector, createSelector, DefaultProjectorFn, MemoizedSelector } from '@ngrx/store';

import { PublicHoliday } from '@/api/models/public-holiday.model';

import { PublicHolidayState } from '../state/public-holiday.state';

export const selectPublicHolidaysState = createFeatureSelector<PublicHolidayState>('publicHoliday');

export const selectPublicHolidays = createSelector(
  selectPublicHolidaysState,
  (state: PublicHolidayState) => state.publicHolidays
);
export const selectIsLoading = createSelector(
  selectPublicHolidaysState,
  (state: PublicHolidayState) => state.isLoading
);

export const selectPublicHolidayByMonth = (
  monthIndex: number
): MemoizedSelector<object, PublicHoliday[], DefaultProjectorFn<PublicHoliday[]>> =>
  createSelector(selectPublicHolidays, (publicHolidays: PublicHoliday[]) =>
    publicHolidays.filter((publicHoliday: PublicHoliday) => publicHoliday.date.getMonth() === monthIndex)
  );
