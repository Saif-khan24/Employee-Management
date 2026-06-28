import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';

export const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },

  {
    path: 'employees',
    component: EmployeeListComponent
  },

  {
    path: 'add',
    component: AddEmployeeComponent
  },

  {
    path: 'edit/:id',
    component: EditEmployeeComponent
  },

  {
    path: 'view/:id',
    component: ViewEmployeeComponent
  },

  {
    path: '**',
    redirectTo: ''
  }

];