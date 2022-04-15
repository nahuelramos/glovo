import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-public-holiday-month-list',
  templateUrl: './public-holiday-month-list.component.html',
  styleUrls: ['./public-holiday-month-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PublicHolidayMonthListComponent implements OnInit {
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

  constructor() {}

  ngOnInit(): void {}
}
