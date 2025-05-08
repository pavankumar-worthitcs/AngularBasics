import { Component, NgModule } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule,FormsModule,CommonModule,RouterModule],
  providers:[EmployeeService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
  
})
export class EmployeeComponent implements OnInit {

  employees:Employee [] = [];  
  searchText:string = ''; 
  constructor(private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
   this.loadEmployees(this.searchText);
   
  }

  loadEmployees(searchText: string): void {
   
      this.employeeService.searchedEmployees(searchText).subscribe({

        next: (data) => {
          this.employees = data;
        },
        error: (err) => {
          console.error('Failed to load searched employees:', err);
        }
      });
    }
  }



