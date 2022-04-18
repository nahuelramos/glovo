import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    canActivate: [],
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'public-holiday',
    canActivate: [],
    loadChildren: () => import('./features/public-holiday/public-holiday.module').then((m) => m.PublicHolidayModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
