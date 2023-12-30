import { Component, OnInit } from '@angular/core';
import { FlightFilter } from '../flight-filter';
import { FlightService } from '../flight.service';
import { Flight } from '../flight';
import { Employee } from '../employee';


@Component({
  selector: 'app-flight',
  templateUrl: 'flight-list.component.html'
})
export class FlightListComponent implements OnInit {

  filter = new FlightFilter();
  selectedFlight!: Flight;
  feedback: any = {};

  get flightList(): Employee[] {
    return this.flightService.flightList;
  }

  constructor(private flightService: FlightService) {
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

  delete(flight: Employee): void {
    if (confirm('Are you sure?')) {
      this.flightService.delete(flight).subscribe(() => {
          this.feedback = {type: 'success', message: 'Delete was successful!'};
          setTimeout(() => {
            this.search();
          }, 1000);
        },
        err => {
          this.feedback = {type: 'warning', message: 'Error deleting.'};
        }
      );
    }
  }
}
