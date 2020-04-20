import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from './material_module';
import {HttpClientModule} from '@angular/common/http';
import {EmployeeDataService} from './employee-data.service';
import { FormsModule } from '@angular/forms';
import { EmployeedataComponent } from './employeedata/employeedata.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AllEmployeeComponent,
    LoginComponent,
    EmployeedataComponent,
    AddEmployeeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [EmployeeDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
