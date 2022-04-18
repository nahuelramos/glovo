import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'public-holiday',
    canActivate: [],
    loadChildren: () => import('./features/public-holiday/public-holiday.module').then((m) => m.PublicHolidayModule),
  },
  {
    path: 'home',
    canActivate: [],
    loadChildren: () => import('./features/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
