import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';
// import { FlightListComponent } from './flight-list/flight-list.component';
import { DepartmentEditComponent } from './home/department-edit/department-edit.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'department/:id',
    component: DepartmentEditComponent
  },
  {
    path: '**',
    redirectTo: 'home'
  }
]

export const APP_EXTRA_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules
}
