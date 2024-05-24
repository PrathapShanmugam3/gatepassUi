import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../apiServices/api.service';
import { Router } from '@angular/router';

import * as bcrypt from 'bcryptjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {





loginForm: FormGroup;

constructor(private fb: FormBuilder,private ApiService:ApiService,private route:Router) {
  this.loginForm = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });
}


 onSubmit() {


const data= this.loginForm.value as any;
  this.ApiService.post('Admin/useLoginDetails',data).subscribe(async (res)=>{
    console.log(res);

   

    localStorage.setItem('loginUser',JSON.stringify(res));

   const role= await bcrypt.compare('SuperAdmin', res.role) 

   console.log(role);

    if(role){
      this.route.navigate(['Admin','dashboard']);
    }else{
      this.route.navigate(['']);
    }
    
   
  })

}

}
