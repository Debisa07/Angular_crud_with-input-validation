import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { DepartmentService } from '../flight.service';
import { Flight } from '../flight';
import { map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Department } from '../department';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html'
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

  saveone() {

    this.flightService.save(this.flight).subscribe(
      flight => {
        this.flight = flight;
        this.feedback = { type: 'success', message: 'Save was successful!' };
        setTimeout(() => {
          this.router.navigate(['/department']);
        }, 1000);
      },
      err => {
        this.feedback = { type: 'warning', message: 'Error saving' };
      }
    );

  }

  cancel() {
    this.router.navigate(['/department']);
  }
}
