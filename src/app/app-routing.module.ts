import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import {EmployeedataComponent} from './employeedata/employeedata.component'
 
const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'allEmployee', component:AllEmployeeComponent},
  {path:'employee/:id', component:EmployeedataComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
