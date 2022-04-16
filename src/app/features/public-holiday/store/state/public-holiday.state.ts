import { PublicHoliday } from '@/api/models/public-holiday.model';

export interface PublicHolidayState {
  publicHolidays: PublicHoliday[];
}

export const initialState: PublicHolidayState = {
  publicHolidays: [],
};
