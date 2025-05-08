import { Routes } from '@angular/router';
import { RegisterEmployeeComponent } from './components/register-employee/register-employee.component';
import { CreateIdCardComponent } from './components/create-id-card/create-id-card.component';
import { DeleteDetailsComponent } from './components/delete-details/delete-details.component';
import { EmployeeComponent } from './components/employee/employee.component';

export const routes: Routes = [
    {
         path: '', redirectTo: 'HomePage', pathMatch: 'full'
    },
    {
        path:'HomePage',component: EmployeeComponent
    },
    {
        path:'RegisterEmployee',component: RegisterEmployeeComponent
    }
    ,
    {
        path:'CreateIdCard',component: CreateIdCardComponent
    }
    ,
    {
        path:'DeleteEmployee',component: DeleteDetailsComponent
    }
];
