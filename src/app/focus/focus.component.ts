import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-focus',
  imports: [FormsModule],
  templateUrl: './focus.component.html',
  styleUrl: './focus.component.css'
})
export class FocusComponent {


name : string = "create your own title";
createdOn = `02-05-2025`
createdBy = `pavan kumar`
 isSingle:boolean = true
 mobile:number = 9618194867

}
