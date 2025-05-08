import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { EmployeeService } from '../../employee.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from 'express';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-create-id-card',
  imports: [ReactiveFormsModule, FormsModule,CommonModule,RouterModule],  
  templateUrl: './create-id-card.component.html',
  styleUrl: './create-id-card.component.css'
})
export class CreateIdCardComponent implements OnInit {
  createIdForm !: FormGroup;
  updateStatus: string = '';
constructor(private formBuilder: FormBuilder,private employeeService : EmployeeService) { }


  ngOnInit(): void {
    this.createIdForm = this.formBuilder.group({
      employeeId: ['',Validators.required],
      IdCard: this.formBuilder.group({
      number: ['',Validators.required]
      })
  })

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
}



