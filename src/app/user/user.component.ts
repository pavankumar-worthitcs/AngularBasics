import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {


  users = [
    { id: 1, name: 'pavan kumar', email: 'pavan@gmail.com'},
    { id: 2, name: 'vamshi', email: 'vamshi@gmail.com'},
    { id: 3, name: 'kishore', email: 'kishore@gmail.com'},
    { id: 4, name: 'vyshanvi', email: 'vyshnavi@gmail.com'},
    { id: 5, name: 'shekar', email: 'shekar@gmail.com'},
    { id: 2, name: 'teja', email: 'teja@gmail.com'},
  ]

}
