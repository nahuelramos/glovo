import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublicHolidayComponent } from './public-holiday.component';

const routes: Routes = [
  {
    path: '',
    component: PublicHolidayComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicHolidayRoutingModule {}
