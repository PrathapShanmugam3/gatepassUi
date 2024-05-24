import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DepartmentRoutingModule } from './department-routing.module';
import { AddDepartmentComponent } from './add-department/add-department.component';

import { UpdateDepartmentComponent } from './update-department/update-department.component';
import { ViewDepartmentComponent } from './view-department/view-department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AddDepartmentComponent,
   
    UpdateDepartmentComponent,
    ViewDepartmentComponent
  ],
  imports: [
    CommonModule,
    DepartmentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class DepartmentModule { }
