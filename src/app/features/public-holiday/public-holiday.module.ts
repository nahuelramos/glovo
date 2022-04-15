import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PublicHolidayComponent } from './public-holiday.component';
import { PublicHolidayRoutingModule } from './public-holiday-routing.module';

@NgModule({
  declarations: [PublicHolidayComponent],
  imports: [CommonModule, PublicHolidayRoutingModule],
})
export class PublicHolidayModule {}
