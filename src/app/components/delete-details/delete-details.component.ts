import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-delete-details',
  imports: [ReactiveFormsModule, FormsModule,CommonModule,RouterModule],
  templateUrl: './delete-details.component.html',
  styleUrl: './delete-details.component.css'
})
export class DeleteDetailsComponent {
  deleteDetailsForm! :FormGroup;
  deleteStatus: string = '';
  constructor(private formBuilder: FormBuilder,private employeeService:EmployeeService) { }
  
  ngOnInit(): void {
   
 
     this.deleteDetailsForm = this.formBuilder.group({
       employeeId: ['',Validators.required]
     })
 
   }
   onDelete():void{

    this.deleteDetailsForm.markAllAsTouched();
    if (this.deleteDetailsForm.invalid){
      return
    }
    console.log(this.deleteDetailsForm.value.employeeId);
    this.employeeService.deleteEmployee(this.deleteDetailsForm.value.employeeId).subscribe({
      next: (res) => {
        this.deleteDetailsForm.reset();
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

}
