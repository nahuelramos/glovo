import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { PublicHolidayMonthComponent } from './components/public-holiday-month/public-holiday-month.component';
import { PublicHolidayMonthListComponent } from './components/public-holiday-month-list/public-holiday-month-list.component';
import { PublicHolidayComponent } from './public-holiday.component';
import { PublicHolidayRoutingModule } from './public-holiday-routing.module';
import { PublicHolidayEffects } from './store/effects/public-holiday.effects';
import { reducer } from './store/reducers/public-holiday.reducers';

@NgModule({
  declarations: [PublicHolidayComponent, PublicHolidayMonthComponent, PublicHolidayMonthListComponent],
  imports: [
    CommonModule,
    PublicHolidayRoutingModule,
    StoreModule.forRoot({}),
    StoreModule.forFeature('publicHoliday', reducer),
    EffectsModule.forRoot([]),
    EffectsModule.forFeature([PublicHolidayEffects]),
  ],
})
export class PublicHolidayModule {}
