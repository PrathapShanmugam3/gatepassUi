import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';
import { Department } from 'src/app/classes/department';

@Component({
  selector: 'app-view-department',
  templateUrl: './view-department.component.html',
  styleUrls: ['./view-department.component.css']
})
export class ViewDepartmentComponent implements OnInit{










  constructor(private apiService:ApiService,private route:Router,private act:ActivatedRoute){}

  viewAllDept:any[]=[];


  ngOnInit(): void {
    this.getAll();
  }


  getAll(){
    this.apiService.get('Admin/getAllDepartments').subscribe((res)=>{
  this.viewAllDept=res;
    
    })
  }

  gotoGetDeptById(id:number) {
    this.route.navigate(['Admin','department','updateDepartment',id])
    }

    deleteDept(id:number) {
    this.apiService.delete(`Admin/DeletedepartmentDetails/${id}`).subscribe((res)=>{
      location.reload();
    })

   

     }



gotoAddDepartment() {

  this.route.navigate(['Admin','department','addDepartment'])

}

gotoDepartment() {
  this.route.navigate(['Admin','dashboard'])
  }
  

}
