import { PublicHoliday } from '@/api/models/public-holiday.model';

export interface PublicHolidayState {
  publicHolidays: PublicHoliday[];
  isLoading: boolean;
}

export const initialState: PublicHolidayState = {
  publicHolidays: [],
  isLoading: false,
};
