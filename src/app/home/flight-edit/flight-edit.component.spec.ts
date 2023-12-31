import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { DepartmentEditComponent } from './flight-edit.component';
import { DepartmentService } from '../flight.service';

describe('FlightEditComponent', () => {
  let component: DepartmentEditComponent;
  let fixture: ComponentFixture<DepartmentEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DepartmentEditComponent],
      imports: [FormsModule, HttpClientTestingModule, RouterTestingModule],
      providers: [DepartmentService]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
