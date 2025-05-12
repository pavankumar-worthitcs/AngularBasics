import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router'; 

@Component({
  selector: 'app-register-employee',
  imports: [CommonModule,FormsModule,ReactiveFormsModule,RouterModule],
  templateUrl: './register-employee.component.html',
  styleUrl: './register-employee.component.css'
})
export class RegisterEmployeeComponent implements OnInit {
  employeeForm!: FormGroup;
  createStatus: string = '';

  constructor(private formBuilder: FormBuilder, private employeeService : EmployeeService ) {}

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }
onRegister(): void{
    this.employeeForm.markAllAsTouched();
    if (this.employeeForm.invalid){
      return
    }
      this.employeeService.addEmployee(this.employeeForm.value).subscribe({
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
    
  



}
