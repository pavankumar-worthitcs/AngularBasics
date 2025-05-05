import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export class Student {
  constructor(
    public id: number,
    public name: string,
    public age: number,
    public grade: string
  ) {}
}
@Component({
  selector: 'app-student',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})

export class StudentComponent {
  
  students: Student[] = [
    new Student(1, 'John Doe', 20, 'A'),
    new Student(2, 'Jane Smith', 22, 'B'),
    new Student(3, 'Alice Johnson', 19, 'A'),
    new Student(4, 'Bob Brown', 21, 'C')
  ];


}
