import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DepartmentListComponent } from './flight-list/flight-list.component';
import { DepartmentEditComponent } from './flight-edit/flight-edit.component';
import { DepartmentService } from './flight.service';
import { FLIGHT_ROUTES } from './flight.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(FLIGHT_ROUTES)
  ],
  declarations: [
    DepartmentListComponent,
    DepartmentEditComponent
  ],
  providers: [DepartmentService],
  exports: []
})
export class DepartmentModule { }
