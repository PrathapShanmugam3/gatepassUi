import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';
import { EmployeeModule } from '../employee.module';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {



constructor(private apiService:ApiService,private route:Router,private act:ActivatedRoute,private snack:MatSnackBar){}
id:number;

ngOnInit(): void {
this.id=this.act.snapshot.params['id'];
this.getEmployeeDetailsById();
}

updateEmployee=new FormGroup({
  EmployeeCode:new FormControl(),
  EmployeeName:new FormControl(),
  Photo:new FormControl(),
  ContactNumber1:new FormControl(),
  ContactNumber2:new FormControl(),
  Email:new FormControl(),
  AddressforCommunication:new FormControl(),

});


getEmployeeDetailsById(){
  this.apiService.getId(`Admin/getAllEmployees/${this.id}`).subscribe((res)=>{
this.updateEmployee.patchValue(res);
  })
}

onFileChange(event: any) {
  const file = event.target.files[0];
  this.updateEmployee.patchValue({
    Photo: file
  });
}

updateEmployeeById(){
  const formData = new FormData();

  const formValue: { [key: string]: any } = this.updateEmployee.value;


  Object.keys(formValue).forEach(key => {
    formData.append(key, formValue[key]);
  });

  this.apiService.update(`Admin/UpdateEmployeeDetails/${this.id}`,formData).subscribe((res)=>{
    this.showNotification('Updated Sucessfully','close')
    this.route.navigate(['Admin','employee','viewemployee']);
    })
}
  

gotoViewEmployee() {
 this.route.navigate(['Admin','employee','viewEmployee']);
  }



  onImageLoad(): void {
    console.log('Image loaded successfully');
  }


  getImageSrc(empId: any) {
  
    return `http://localhost:3000/Admin/getImageById/${empId}`;

  }

  showNotification(message:string,action:string ) {
    this.snack.open(message, action, {
      duration:3000,
    })
  }

}
