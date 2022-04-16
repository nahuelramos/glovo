import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-public-holiday-month-list',
  templateUrl: './public-holiday-month-list.component.html',
  styleUrls: ['./public-holiday-month-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidayMonthListComponent {
  monthList = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
}
