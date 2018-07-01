import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Employee/employee-list/employee-list.component';
import { EmployeeTitlePipe } from './Employee/employee-title.pipe';
import { EmployeeService } from './Employee/employee.service';
import { EmployeeCountComponent } from './Employee/employee-count/employee-count.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent} from './home/home.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './Employee/employee/employee.component';


@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeTitlePipe,
    EmployeeCountComponent,
    NavigationComponent,
    HomeComponent,
    LoginComponent,
    EmployeeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: LoginComponent
      },
        {
          path: 'employees',
          component: EmployeeListComponent
        },
        {
          path: 'login',
          component: LoginComponent
        },
        {
          path: 'employee/:id/:name/:gender/:salary/:company',
          component: EmployeeComponent
        }
    ])
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
