import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from './models/employee';
import { PaginatedDTOResponse } from './models/paginated-dtoresponse';
import { EmployeeDTO } from './models/employee-dto';
import { createIdCardDTOResponse } from './models/created-IdCard-DTOResponse';
import { response } from 'express';
@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private baseUrl = 'http://localhost:8080/'; // your backend endpoint

  constructor(private http: HttpClient) {}

  searchedEmployees(
    searchText: string,
    page: number,
    size: number
  ): Observable<PaginatedDTOResponse> {
    return this.http.get<PaginatedDTOResponse>(
      this.baseUrl +
        `fetchEmployeeWithMatchedData/${page}/${size}?data=${searchText}`
    );
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.baseUrl + 'employeesList');
  }

  updateEmployee(employeeId: number, employee: EmployeeDTO): Observable<void> {
    return this.http.put<void>(
      this.baseUrl + `updateEmployee/${employeeId}`,
      employee
    );
  }

  getEmployeeById(employeeId: number): Observable<Employee> {
    return this.http.get<Employee>(
      this.baseUrl + `fetchEmployeeById/${employeeId}`
    );
  }

  addEmployee(employee: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}saveEmployee`, employee);
  }

  createIdCardForEmployee(createIdForm: any): Observable<string> {
    return this.http
      .put<{ message: string }>(
        `${this.baseUrl}createNewIdCardForEmployee/${createIdForm.employeeId}`,
        createIdForm.IdCard
      )
      .pipe(map((response) => response.message));
  }

  deleteEmployee(employeeId: number): Observable<any> {
    return this.http.delete<any>(
      this.baseUrl + `deleteEmployeeById/${employeeId}`
    );
  }
}
