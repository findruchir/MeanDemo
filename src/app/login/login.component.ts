import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { EmployeeService } from '../employee/employee.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any={};
  mySubject = new Subject<any>();
  message: string ="hello";
  constructor(private _empServ: EmployeeService) {    
    //console.log(this);
  }

  ngOnInit() {
    let that = this;
    this._empServ.mySubject$.subscribe((data)=>{
      // that.message = data;
      console.log(data);
    });
  }

  login(){

    this._empServ.login(this.user.email);
  }
}
