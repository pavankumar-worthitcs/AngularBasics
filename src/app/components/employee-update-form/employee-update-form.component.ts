import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { EmployeeDTO } from '../../models/employee-dto';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-employee-update-form',
  imports: [FormsModule, CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './employee-update-form.component.html',
  styleUrl: './employee-update-form.component.css',
})
export class EmployeeUpdateFormComponent {
  updateForm!: FormGroup;
  updateStatus: string = '';
  employee!: EmployeeDTO;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private employeeService: EmployeeService
  ) {
    this.updateForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required]],
    });
  }
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.employeeService.getEmployeeById(+id).subscribe((data) => {
        this.employee = data;
        this.fillUpdateForm(this.employee);
      });
    }
  }
  filterEmptyFields(obj: any): any {
    return Object.fromEntries(
      // destructuring the array and using the value
      Object.entries(obj).filter(([_, value]) => {
        if (typeof value === 'string') {
          return value.trim() !== ''; // ignore empty or whitespace strings
        }
        return value !== null && value !== undefined;
      })
    );
  }

  updateEmployee() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    // Only include non-empty updates
    const updatedData = this.filterEmptyFields(this.updateForm.value);

    // Merge non-empty updated fields into original employee data
    const mergedData = { ...this.employee, ...updatedData };

    this.employeeService.updateEmployee(id, mergedData).subscribe(() => {
      this.updateForm.reset();
      setTimeout(() => {
        this.fillUpdateForm(mergedData);
        this.updateStatus = 'your details updated successfully !';
      }, 550);
    });
  }

  fillUpdateForm(data: EmployeeDTO) {
    this.updateForm.patchValue({
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
    });
  }
}
