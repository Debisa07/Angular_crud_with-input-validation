import { Component, OnInit } from '@angular/core';
import { DepartmentFilter } from '../flight-filter';
import { DepartmentService } from '../flight.service';
import { Flight } from '../flight';
import { Department } from '../department';


@Component({
  selector: 'app-flight',
  templateUrl: 'flight-list.component.html'
})
export class DepartmentListComponent implements OnInit {

  filter = new DepartmentFilter();
  selectedFlight!: Flight;
  feedback: any = {};

  get flightList(): Department[] {
    return this.flightService.flightList;
  }

  constructor(private flightService: DepartmentService) {
  }

  ngOnInit() {
    this.search();
  }

  search(): void {
    console.log("serachinnnnnnnnnnnnnnnnnnng")
    this.flightService.load(this.filter);
  }

  select(selected: Flight): void {
    this.selectedFlight = selected;
  }

  delete(flight: Department): void {
    if (confirm('Are you sure?')) {
      this.flightService.delete(flight).subscribe(() => {
        this.feedback = { type: 'success', message: 'Delete was successful!' };
        setTimeout(() => {
          this.search();
        }, 1000);
      },
        err => {
          this.feedback = { type: 'warning', message: 'Error deleting.' };
        }
      );
    }
  }
}
