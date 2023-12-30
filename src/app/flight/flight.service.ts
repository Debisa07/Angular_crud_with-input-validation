import { Flight } from './flight';
import { Employee } from './employee';
import { FlightFilter } from './flight-filter';
import { Injectable } from '@angular/core';
import { EMPTY, Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable()
export class FlightService {
  flightList: Employee[] = [];

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Employee> {
    const url = `http://localhost:5000/employees/${id}`;
    const params = { 'id': id };
    const headers = new HttpHeaders().set('Accept', 'application/json');
    return this.http.get<Employee>(url, { params, headers });
  }

  load(filter: FlightFilter): void {
    this.find(filter).subscribe(result => {
      this.flightList = result;
    },
      err => {
        console.error('error loading', err);
      }
    );
  }

  find(filter: FlightFilter): Observable<Employee[]> {
    const url = `http://localhost:5000/employees`;

    console.log("findddinggggg");

    const headers = new HttpHeaders().set('Accept', 'application/json');

    // const params = {
    //   'from': filter.from,
    //   'to': filter.to,
    // };

    // console.log({ params })
    const params = {

    };
    const resp = this.http.get<Employee[]>(url, { params, headers }).subscribe(
      result => {
        console.log({ result });
        // return result;
      },
      err => {
        console.error('error loading', err);
      }
    );

    console.log({ resp });


    return this.http.get<Employee[]>(url, { params, headers });
  }

  save(entity: Employee): Observable<Employee> {
    let params = new HttpParams();
    let url = '';
    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity._id) {
      console.log("savvvvvvvvvvvvving by id");
      console.log({ entity });
      url = `http://localhost:5000/employees/${entity._id}`;
      params = new HttpParams().set('id', entity._id.toString());
      return this.http.post<Employee>(url, entity, { headers, params });
    } else {
      console.log("savvvvvvvvvvvvving without id");
      console.log({ entity });
      url = `http://localhost:5000/employees`;
      return this.http.post<Employee>(url, entity, { headers, params });
    }
  }

  delete(entity: Employee): Observable<Employee> {

    let params = new HttpParams();
    let url = '';

    console.log("deleeeeeeeeetinnnnnnnnnnnnnnn")

    const headers = new HttpHeaders().set('content-type', 'application/json');
    if (entity._id) {
      url = `http://localhost:5000/employees/${entity._id}`;
      params = new HttpParams().set('id', entity._id);
      return this.http.delete<Employee>(url, { headers, params });
    }
    return EMPTY;
  }

}

