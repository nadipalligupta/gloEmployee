import { Injectable } from '@angular/core';
import {HttpClient } from "@angular/common/http";
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmployeeDataService {
  constructor(private http: HttpClient) { }
  getData(): Observable<any>{
    return this.http.get("./assets/empData.json");
  }

  createEmployee(data): Observable<any>{
    return of(this.http.post("./assets/empData.json",data).subscribe(data=>{
      return data;
    }));
  }
}
