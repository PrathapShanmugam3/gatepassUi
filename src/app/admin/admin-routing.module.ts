import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';



const routes: Routes = [
  {path:"department",loadChildren:()=>import("./department/department.module").then(a=>a.DepartmentModule)},
  {path:"employee",loadChildren:()=>import("./employee/employee.module").then(a=>a.EmployeeModule)},
  {path:"dashboard",component:DashboardComponent}
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
