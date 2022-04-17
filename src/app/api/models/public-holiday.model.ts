export interface PublicHoliday {
  date: Date;
  localName: string;
  name: string;
  countryCode: string;
  fixed: boolean;
  global: boolean;
  counties?: string[];
  launchYear: string;
  type: string;
}
