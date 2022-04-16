import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { PublicHoliday } from '@/api/models/public-holiday.model';

import { selectPublicHolidayByMonth } from '../../store/selectors/public-holiday.selector';

@Component({
  selector: 'app-public-holiday-month',
  templateUrl: './public-holiday-month.component.html',
  styleUrls: ['./public-holiday-month.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidayMonthComponent implements OnInit {
  @Input() monthTitle: string;
  @Input() monthIndex: number;
  monthHolidays: PublicHoliday[];

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectPublicHolidayByMonth(this.monthIndex)).subscribe({
      next: (monthHolidays: PublicHoliday[]) => (this.monthHolidays = monthHolidays),
    });
  }
}
