import { Component, ViewChild } from '@angular/core';
import { EmployeeService } from '../../employee.service';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Employee } from '../../models/employee';
import { RouterModule } from '@angular/router';
import {
  MatPaginator,
  MatPaginatorModule,
  PageEvent,
} from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employee',
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
  ],
  providers: [EmployeeService],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css',
})
export class EmployeeComponent implements OnInit {
  currentPage = 0;
  pageSize = 7;
  totalRecords = 0;
  employees: Employee[] = [];
  searchText: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private employeeService: EmployeeService,
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loadEmployees(this.searchText);
  }

  openDeleteConfirmDialog(recordId: number): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: { message: 'Are you sure you want to delete your Details ?' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.employeeService.deleteEmployee(recordId).subscribe({
          next: () => {
            this.loadEmployees(this.searchText);
            this.snackBar.open('Employee deleted successfully!', 'Close', {
              duration: 3000,
              verticalPosition: 'top',
              horizontalPosition: 'right',
            });
          },
        });
      }
    });
  }

  loadEmployees(searchText: string): void {
    this.employeeService
      .searchedEmployees(searchText, this.currentPage, this.pageSize)
      .subscribe({
        next: (response) => {
          this.employees = response.employees;
          this.totalRecords = response.totalRecords;
        },
        error: (err) => {
          console.error('Failed to load searched employees:', err);
        },
      });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.loadEmployees(this.searchText);
  }
}
