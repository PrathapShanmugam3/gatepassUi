import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {




  constructor(private route:Router){

  }




gotoEmployee() {
  this.route.navigate(['Admin','employee','viewemployee']);
}



gotoDepartment() {
  this.route.navigate(['Admin','department','viewDepartment']);
  }

}
