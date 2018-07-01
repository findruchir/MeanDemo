import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params } from '@angular/router';
import { Location } from '@angular/common';
import { UserPreferencesService } from '../../singelTone/user-preferences.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  ID;name;gender;salary;company;

  private _userPref : UserPreferencesService;

  constructor(private _router:Router,private _route:ActivatedRoute, private _location : Location ) {

      this._userPref = new UserPreferencesService();
   }

   get color(): string{
    return this._userPref.colorPreferences;
  }

  set color(value: string) {
     this._userPref.colorPreferences = value;
  }

  ngOnInit() {
    this._route.params.subscribe((params:Params)=>{
      this.ID=params['id'];
      this.name=params['name'];
      this.gender=params['gender'];
      this.salary=params['salary'];
      this.company=params['company'];
    });
    
  }
      goBack(){
        this._location.back();
      }

}
