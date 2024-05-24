import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/apiServices/api.service';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {






  allEmployees:any[]=[];

  constructor(private apiService:ApiService,private route:Router){

  }
  ngOnInit(): void {
   this.get();
  }


  get(){
    this.apiService.get('Admin/getAllEmployees').subscribe((res)=>{
        this.allEmployees=res;
        console.log(res);
        
    })
  }



  onImageLoad(): void {
    console.log('Image loaded successfully');
  }


  getImageSrc(empId: any) {
  
    return `http://localhost:3000/Admin/getImageById/${empId}`;

  }

  deleteEmployee(id:number) {

    this.apiService.delete(`Admin/DeleteEmployeeDetails/${id}`).subscribe((res)=>{
      confirm('Are you sure to Delete')
      location.reload();
    })

    
    }

    updateEmployeeById(id:number) {
      this.route.navigate(['Admin','employee','updateemployee',id]);
      }

  

      gotoAddEmployee() {
     
       
        this.route.navigate(['Admin','employee','addemployee']);
        }
        
        gotoEmployee() {
          this.route.navigate(['Admin','dashboard']);
        }



}
