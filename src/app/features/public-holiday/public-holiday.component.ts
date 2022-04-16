import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as PublicHolidayActions from './store/actions/public-holiday.actions';

@Component({
  selector: 'app-public-holiday',
  templateUrl: './public-holiday.component.html',
  styleUrls: ['./public-holiday.component.scss'],
})
export class PublicHolidayComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(PublicHolidayActions.getPublicHolidays());
  }
}
