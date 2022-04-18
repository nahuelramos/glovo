import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PublicHolidayService } from '@/api/services/public-holiday/public-holiday.service';

import * as PublicHolidayActions from '../actions/public-holiday.actions';

@Injectable({
  providedIn: 'root',
})
export class PublicHolidayEffects {
  loadPublicHolidays$ = createEffect(() =>
    this.actions$.pipe(
      ofType(PublicHolidayActions.getPublicHolidays.type),
      mergeMap(() =>
        this.publicHolidaysService.retrievePublicHolidays('2022', 'ES').pipe(
          map((publicHolidays) => PublicHolidayActions.fetchPublicHolidaysSuccess({ publicHolidays })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private publicHolidaysService: PublicHolidayService) {}
}
