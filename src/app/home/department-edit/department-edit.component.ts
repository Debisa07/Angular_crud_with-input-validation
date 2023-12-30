import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';
import { Department } from '../department';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';


@Component({
  selector: 'app-flight-edit',
  templateUrl: './department-edit.component.html'
})
export class DepartmentEditComponent implements OnInit {

  id!: string;
  flight!: Department;
  feedback: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private flightService: DepartmentService) {
  }

  ngOnInit() {
    this
      .route
      .params
      .pipe(
        map(p => p.id),
        switchMap(id => {
          if (id === 'new') { return of(new Department()); }
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
    // this.flightService.save(this.flight).subscribe(
    //   flight => {
    //     this.flight = flight;
    //     this.feedback = { type: 'success', message: 'Save was successful!' };
    //     setTimeout(() => {
    //       this.router.navigate(['/employees']);
    //     }, 1000);
    //   },
    //   err => {
    //     this.feedback = { type: 'warning', message: 'Error saving' };
    //   }
    // );
  }

  cancel() {
    this.router.navigate(['/department']);
  }
}
