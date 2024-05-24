import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent implements OnInit {

  allEmployeeDetails: any[]=[];
  
constructor(
    private route: Router,
    private ser: ApiService,
    private snack: MatSnackBar
  ) {
    
  }

  addEmployee: FormGroup;
  


  ngOnInit(): void {
    this.addEmployee = new FormGroup({
      EmployeeCode: new FormControl('', [Validators.required]),
      EmployeeName: new FormControl('', [Validators.required]),
      Photo: new FormControl('', [Validators.required]),
      ContactNumber1: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      ContactNumber2: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      AddressforCommunication: new FormControl('', [Validators.required]),
    });

    this.getAllEmployees();
  }




  
  post() {
    const formData = new FormData();

    const formValue: { [key: string]: any } = this.addEmployee.value;

    Object.keys(formValue).forEach((key) => {
      formData.append(key, formValue[key]);
    });
    this.ser.post('Admin/addEmployee',formData).subscribe((res)=>{
    console.log(res);
    this.showNotification('Form Submitted Successfully','Close');
    this.route.navigate(['Admin','employee','viewemployee'])
       
    })
  }




  
  gotoViewdepartment(){
    this.route.navigate(['Admin','department','viewDepartment']);
  }

  gotoViewEmployee() {
    this.route.navigate(['Admin','employee', 'viewemployee']);
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.addEmployee.patchValue({
      Photo: file,
    });
  }




  showNotification(message:string,action:string ) {
    this.snack.open(message, action, {
      duration:3000,
    })
  }

  getAllEmployees(){
    this.ser.get('Admin/getAllDepartments').subscribe((res)=>{
        this.allEmployeeDetails=res;
        console.log(res);
        
    })  
  }
  

  

}
