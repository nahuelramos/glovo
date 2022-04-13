export interface PublicHoliday {
  date: Date;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties: string[];
  lunchYear: string;
  type: string;
}
