import { Action, createReducer, on } from '@ngrx/store';

import * as PublicHolidayActions from '../actions/public-holiday.actions';
import { initialState, PublicHolidayState } from '../state/public-holiday.state';

const publicHolidayReducer = createReducer(
  initialState,
  on(PublicHolidayActions.fetchPublicHolidaysSuccess, (state, { publicHolidays }) => ({
    ...state,
    publicHolidays: publicHolidays,
    isLoading: false,
  })),
  on(PublicHolidayActions.getPublicHolidays, (state) => ({
    ...state,
    isLoading: true,
  }))
);

export const reducer = (state: PublicHolidayState, action: Action): PublicHolidayState => {
  return publicHolidayReducer(state, action);
};
