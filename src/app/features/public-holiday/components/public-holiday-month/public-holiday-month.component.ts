import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { PublicHoliday } from '@/api/models/public-holiday.model';

@Component({
  selector: 'app-public-holiday-month',
  templateUrl: './public-holiday-month.component.html',
  styleUrls: ['./public-holiday-month.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidayMonthComponent {
  @Input() monthTitle: string;
  @Input() monthHolidays: PublicHoliday[];

  constructor() {}
}
