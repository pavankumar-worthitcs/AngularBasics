import { Component,} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeService } from './employee.service';
import { provideHttpClient, withFetch } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, CommonModule, RouterOutlet],
  providers: [EmployeeService],
})
export class AppComponent  {
  name = 'Pavan Kumar';
  title = `software Engineer - Trainee`;
  

}
