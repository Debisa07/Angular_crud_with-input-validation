import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { FlightService } from '../flight.service';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Employee } from '../employee';
import { Department } from '../../home/department';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
})
export class FlightEditComponent implements OnInit {

  id!: string;
  flight!: Employee;
  department!: Department;
  feedback: any = {};

  get departmentList(): Department[] {
    return this.flightService.departmentList;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: FlightService) {
   this.flightService.loaddepartment();
    // console.log({ editdepartment });
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Employee()); }
          return this.flightService.findById(id);
        })
      )
      .subscribe(flight => {
        this.flight = flight;
        this.feedback = {};
      },
        err => {
          this.feedback = { type: 'warning', message: 'Error loading' };
        }
      );
  }

  save() {
    this.flightService.save(this.flight).subscribe(
      flight => {
        this.flight = flight;
        this.feedback = { type: 'success', message: 'Save was successful!' };
        setTimeout(() => {
          this.router.navigate(['/employees']);
        }, 1000);
      },
      err => {
        this.feedback = { type: 'warning', message: 'Error saving' };
      }
    );
  }

  cancel() {
    this.router.navigate(['/employees']);
  }
}
