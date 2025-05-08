import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../app/models/employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/'; // your backend endpoint

  constructor(private http: HttpClient) {}

  searchedEmployees(searchText : string): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl+`fetchEmployeeWithMatchedData/1/10?data=${searchText}`);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl+"employeesList");
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.baseUrl+"saveEmployee", employee);
  }

  createIdCardForEmployee(createIdForm:any): Observable<any> {
    return this.http.put<any>(this.baseUrl+`createNewIdCardForEmployee/${createIdForm.employeeId}`, createIdForm.IdCard);
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(this.baseUrl+`deleteEmployeeById/${employeeId}`)
  
  }
}