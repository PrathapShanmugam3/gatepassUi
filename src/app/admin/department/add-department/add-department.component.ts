import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';

import { Department } from 'src/app/classes/department';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css'],
})
export class AddDepartmentComponent {
  constructor(private route: Router, private ser: ApiService,private snack:MatSnackBar) {}

  addDepartment = new FormGroup({
    departmentCode: new FormControl(),
    departmentName: new FormControl(),
  });

  post() {
    const data = this.addDepartment.value as Department;
    this.ser.post('Admin/addDepartment', data).subscribe({
      next: (res) => {
        console.log(res);
        if (res.message === 'Successfully saved') {
          this.route.navigate(['Admin', 'department', 'viewDepartment']);
        } else {
          alert(res.message); // Handle unexpected messages
        }
      },
      error: (err) => {
        if (
          err.status === 400 &&
          err.error.message === 'Department already exists'
        ) {
this.showNotification('Department Code Already Exists','Close')        } else {
          // Handle other errors
          console.error(err);
          alert('An error occurred while adding the department.');
        }
      },
    });
  }

  gotoViewdepartment() {
    this.route.navigate(['Admin', 'department', 'viewDepartment']);
  }

  showNotification(message:string,action:string ) {
    this.snack.open(message, action, {
      duration:3000,
    })
  }
}
