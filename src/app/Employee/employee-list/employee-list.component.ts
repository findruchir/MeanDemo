import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { UserPreferencesService } from '../../singelTone/user-preferences.service';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
     employees : any[];
     message: String ="hello";

     private _userPref : UserPreferencesService

  constructor(private _empployeeService : EmployeeService,) {
     this._userPref = new  UserPreferencesService();
    //  console.log("New Instance created...");
  }
  
  get color(): string{
    return this._userPref.colorPreferences;
  }

  set color(value: string) {
     this._userPref.colorPreferences = value;
  }
 
  ngOnInit() {
    this.employees = this._empployeeService.getalldata();
    var that = this;
    this._empployeeService.mySubject$.subscribe(function(data){
      console.log(data);
      that.message = data;
    });
  }
      
    getAllEmployees(){
        return this.employees.length;
    }
     
    getMaleEmployees(){
      return this.employees.filter(e=> e.gender === "male").length;
    }

    getFemaleEmployees(){
      return this.employees.filter(e=> e.gender === "female").length;
    }
    
}
