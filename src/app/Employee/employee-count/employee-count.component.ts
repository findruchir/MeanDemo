import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.css']
})
export class EmployeeCountComponent implements OnInit {
  @Input()
  all = 10;
  @Input()
  male = 7;
  @Input()
  female = 3;
  constructor() { }

  ngOnInit() {
  }

}
