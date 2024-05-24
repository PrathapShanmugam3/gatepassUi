import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';
import { Department } from 'src/app/classes/department';

@Component({
  selector: 'app-update-department',
  templateUrl: './update-department.component.html',
  styleUrls: ['./update-department.component.css']
})
export class UpdateDepartmentComponent implements OnInit{


  id:number;

  constructor(private apiService:ApiService,private route:Router,private act:ActivatedRoute,private snack:MatSnackBar){}
  
  ngOnInit(): void {
   this.id= this.act.snapshot.params['id'];
   console.log(this.id);
   this.getDepartmentbyId()
  }

  updateDepartment= new FormGroup({

departmentCode:new FormControl(),
departmentName:new FormControl()

  });



  getDepartmentbyId(){
    
    this.apiService.getId(`Admin/getDepartmentDetailsById/${this.id}`).subscribe((res)=>{
      this.updateDepartment.patchValue(res);
    })
  }

  updateDepartmentSubmit(){

    const data =this.updateDepartment.value as Department;


    this.apiService.update(`Admin/UpdatedepartmentDetails/${this.id}`,data).subscribe((res)=>{

      console.log(res);
      
      this.route.navigate(['Admin','department','viewDepartment']);
      this.showNotification('Department Updated Successfully','close')

    })
   
    
  }




  gotoViewDepartment() {

    this.route.navigate(['Admin','department','viewDepartment']);

    }


    showNotification(message:string,action:string ) {
      this.snack.open(message, action, {
        duration:3000,
      })
    }





}
