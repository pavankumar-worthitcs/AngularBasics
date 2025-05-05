import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FocusComponent } from "./focus/focus.component";
import { FormsModule, NgModel } from '@angular/forms';
import { StudentComponent } from './student/student.component';
import { CommonModule } from '@angular/common';
import { UserComponent } from "./user/user.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, CommonModule, UserComponent]})
export class AppComponent {
  name = 'Pavan Kumar';
  title = `software Engineer - Trainee`;
  
 
}
