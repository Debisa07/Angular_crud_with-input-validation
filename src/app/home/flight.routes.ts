import { Routes } from '@angular/router';
import { DepartmentListComponent } from './flight-list/flight-list.component';
import { DepartmentEditComponent } from './flight-edit/flight-edit.component';

export const FLIGHT_ROUTES: Routes = [
  {
    path: 'department',
    component: DepartmentListComponent
  },
  {
    path: 'department/:id',
    component: DepartmentEditComponent
  }
];
