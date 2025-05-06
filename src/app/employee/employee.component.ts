import { Component, NgModule } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormBuilder,FormGroup,FormsModule,Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { subscribe } from 'diagnostics_channel';
import { CommonModule } from '@angular/common';
export interface Employee {
  id: number;
  firstname: string;
  lastname: string;
  email:string;
 
}
export interface IdCard {
number : string;
}

@Component({
  selector: 'app-employee',
  imports: [ReactiveFormsModule, FormsModule,CommonModule],
  providers:[EmployeeService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
  
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];
  employeeForm !: FormGroup;
  createIdForm !: FormGroup;
  deleteDetails! :FormGroup;
  deleteStatus: string = '';
  createStatus: string = '';
  updateStatus: string = '';
  selectedForm: string = ''; 
  

  constructor(private employeeService: EmployeeService
    ,private formBuilder: FormBuilder
  ) {}

  
  ngOnInit(): void {
    this.loadEmployees();
  
    this.employeeForm = this.formBuilder.group({
      firstname: ['',Validators.required],
      lastname: ['',Validators.required],
      email:['',[Validators.required,Validators.email]],
    })

    this.createIdForm = this.formBuilder.group({
      employeeId: ['',Validators.required],
      IdCard: this.formBuilder.group({
      number: ['',Validators.required]
      })
      
    })
    this.deleteDetails = this.formBuilder.group({
      employeeId: ['',Validators.required]
    })

  }
  onDelete():void{

    this.deleteDetails.markAllAsTouched();
    if (this.deleteDetails.invalid){
      return
    }
    console.log(this.deleteDetails.value.employeeId);
    this.employeeService.deleteEmployee(this.deleteDetails.value.employeeId).subscribe({
      next: (res) => {
        this.deleteDetails.reset();
        this.deleteStatus = res.message;
        setTimeout(() => {
          this.deleteStatus = '';
        }, 3000);
      },
      error: (err) => {
        console.error('Failed to delete employee:', err);
      }
    })
  }


  onRegister(): void{
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.invalid){
      return
    }
      var employee: Employee = this.employeeForm.value;

      this.employeeService.addEmployee(employee).subscribe({
        next: () => {
          this.employeeForm.reset();
          this.createStatus= 'Your details successfully saved !';
          setTimeout(() => {
            this.createStatus = '';
          }, 3000);
        },
        error: (err) => {
          console.error('Failed to add employee:', err);
        }
      })
    }
    
    onChoose(event: any): void {

    }
  

  onUpdate():void{
    this.createIdForm.markAllAsTouched();
    if (this.createIdForm.invalid){
      return
    }
    this.employeeService.createIdCardForEmployee(this.createIdForm.value).subscribe({
      next: (resp) => {
        this.createIdForm.reset();
        this.updateStatus = resp.message;
        setTimeout(() => {
          this.updateStatus = '';
        }, 3000);
      },
      error: (err) => {
        console.error('Failed to create IdCard:', err);
      }
    })
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


