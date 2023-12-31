import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
// import { FlightListComponent } from './flight-list/flight-list.component';
import { DepartmentListComponent } from './home/flight-list/flight-list.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
   {
    path: 'department',
    component: DepartmentListComponent
  },
  // {
  //   path: 'department/:id',
  //   component: DepartmentEditComponent
  // },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
