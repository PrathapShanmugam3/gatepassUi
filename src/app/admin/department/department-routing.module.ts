import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDepartmentComponent } from './add-department/add-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { UpdateDepartmentComponent } from './update-department/update-department.component';


const routes: Routes = [
  {path:"addDepartment",component:AddDepartmentComponent},
  {path:"viewDepartment",component:ViewDepartmentComponent},
  {path:"updateDepartment/:id",component:UpdateDepartmentComponent},

  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DepartmentRoutingModule { }
