import { NgModule } from '@angular/core';
import { Routes, RouterModule,CanActivate } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import {EmployeedataComponent} from './employeedata/employeedata.component'
import { AddEmployeeComponent } from './add-employee/add-employee.component' 
import { 
  AuthGuardService as AuthGuard } from './auth-guard.service';

const routes: Routes = [
  
  {path:'login', component:LoginComponent},
  {path:'allEmployee',canActivate: [AuthGuard], component:AllEmployeeComponent},
  {path:'employee/:id',canActivate: [AuthGuard], component:EmployeedataComponent},
  {path:'addEmployee',canActivate: [AuthGuard], component: AddEmployeeComponent},
  {path:'', redirectTo:'/login', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
