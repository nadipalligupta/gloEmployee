import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable, of} from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor(private http: HttpClient) { }
  serverURL = 'http://localhost:5000';
  getEmpData(): Observable<any>{
    return this.http.get("./assets/empData.json")
    .pipe(
      delay(500)
    );
  };
  getAllEmpData():Observable<any>{
    return this.http.get("https://glo-emp.herokuapp.com/api/allEmployees");
  }
  getData():Observable<any>{
    return this.http.get(this.serverURL+'/api'+'/getAllEmployees')
  }
  createEmployee(data): Observable<any>{
    return of(this.http.post("./assets/empData.json",data)
    .subscribe(data=>{
      return data;
    }));
  };
  deleteEmployee(id){
    return of(this.http.delete("https://glo-emp.herokuapp.com/api/deleteEmployee"+"?"+id)
    .subscribe(data=>{
      return data;
    }));
  };
}
