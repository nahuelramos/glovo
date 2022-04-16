import { Action, createReducer, on } from '@ngrx/store';

import * as PublicHolidayActions from '../actions/public-holiday.actions';
import { initialState, PublicHolidayState } from '../state/public-holiday.state';

const publicHolidayReducer = createReducer(
  initialState,
  on(PublicHolidayActions.fetchPublicHolidaysSuccess, (state, { publicHolidays }) => ({
    ...state,
    publicHolidays: publicHolidays,
  }))
);

export const reducer = (state: PublicHolidayState, action: Action): PublicHolidayState => {
  return publicHolidayReducer(state, action);
};
