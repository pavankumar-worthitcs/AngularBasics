import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { provideHttpClient } from '@angular/common/http';

export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email:string;
  number: number;
}
@Component({
  selector: 'app-employee',
  imports: [],
  providers:[],
  
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
  
})
export class EmployeeComponent {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees(): void {
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
      },
      error: (err) => {
        console.error('Failed to load employees:', err);
      }
    });
  }

}


