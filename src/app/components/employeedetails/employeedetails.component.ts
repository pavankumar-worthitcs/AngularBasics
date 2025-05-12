import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../employee.service';
import { Employee } from '../../models/employee';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-employeedetails',
  imports: [RouterModule],
  templateUrl: './employeedetails.component.html',
  styleUrl: './employeedetails.component.css'
})
export class EmployeedetailsComponent implements OnInit {
 
  employee !: Employee;

  constructor( private route : ActivatedRoute,
    private employeeService : EmployeeService,
  ) {}

  ngOnInit(): void{
   const id = this.route.snapshot.paramMap.get('id');
   if (id) {
    this.employeeService.getEmployeeById(+id).subscribe((data) => {
      this.employee = data;
    })
  }
    
  }



}
