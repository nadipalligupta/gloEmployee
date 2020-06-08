import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {EmployeeDataService} from '../employee-data.service';

@Component({
  selector: 'app-employeedata',
  templateUrl: './employeedata.component.html',
  styleUrls: ['./employeedata.component.css']
})
export class EmployeedataComponent implements OnInit {
userData:any;
assetArray:any;

  constructor(private actRoute:ActivatedRoute, private empServ: EmployeeDataService) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.empServ.getEmpData().subscribe((res)=>{
      res.forEach(ele=>{
        if(ele.id == id){
          this.userData = ele;
          // this.userData.assets.forEach(element => {
          //   Object.keys(element).forEach(e=>console.log(e))
          // });  
        }
      })
    })
    
  }

  editData(){
    
  }


}
