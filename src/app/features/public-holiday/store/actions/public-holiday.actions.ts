import { createAction, props } from '@ngrx/store';

import { PublicHoliday } from '@/api/models/public-holiday.model';

export const getPublicHolidays = createAction('[Get Public Holidays]');

export const fetchPublicHolidaysSuccess = createAction(
  '[Get Public Holidays Success]',
  props<{ publicHolidays: PublicHoliday[] }>()
);
