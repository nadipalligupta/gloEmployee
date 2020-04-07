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

ediT:boolean = true;
resediT:boolean = true;
perediT:boolean = true;
proediT:boolean = true;



displayData:any = "block";
displayInp:any = "none";

projects:[];
skills:[];

dispermDt:any = "block";
dispermInp:any = "none";

disresDt:any = "block";
disresInp:any = "none";

displayproData:any = "block";
displayproInp:any = "none";

displayskill:any = "none";

  constructor(private actRoute:ActivatedRoute, private empServ: EmployeeDataService) { }

  ngOnInit(): void {
    let id = this.actRoute.snapshot.params['id'];
    this.empServ.getData().subscribe((res)=>{
      res.forEach(ele=>{
        if(ele.id == id){
          this.userData = ele;
          console.log(this.userData);
          this.projects = this.userData.projects;
          this.skills = this.userData.skillset;
        }
      })
    })
  }
  submit(ldap, gemail, phone, gloemail,seatno, rhouseno, rlandmark, rarea, rpin, rlocation, rzilla, rstate, phouseno, plandmark, parea, ppin, plocation, pzilla, pstate, addInp){
    this.displayData = "block";
    this.displayInp = "none";

    this.dispermDt = "block";
    this.dispermInp = "none";

    this.disresDt = "block";
    this.disresInp = "none";

    this.displayproData = "block";
    this.displayproInp = "none";

    this.displayskill = "none";

    this.ediT = true;
    this.perediT = true;
    this.resediT = true;
    // this.proediT = true;

    this.userData.ldap = ldap;
    this.userData.mail.gemail = gemail;
    this.userData.contactinfo.phone = phone;
    this.userData.mail.gloemail = gloemail;

    this.userData.seatno = seatno;

    this.userData.contactinfo.address.residential.houseno = rhouseno;
    this.userData.contactinfo.address.residential.landmark = rlandmark;
    this.userData.contactinfo.address.residential.area = rarea;
    this.userData.contactinfo.address.residential.pin = rpin;
    this.userData.contactinfo.address.residential.location = rlocation;
    this.userData.contactinfo.address.residential.zilla = rzilla;
    this.userData.contactinfo.address.residential.state = rstate;

    this.userData.contactinfo.address.permanent.houseno = phouseno;
    this.userData.contactinfo.address.permanent.landmark = plandmark;
    this.userData.contactinfo.address.permanent.area = parea;
    this.userData.contactinfo.address.permanent.pin = ppin;
    this.userData.contactinfo.address.permanent.location = plocation;
    this.userData.contactinfo.address.permanent.zilla = pzilla;
    this.userData.contactinfo.address.permanent.state = pstate;

    // this.userData.projects[1] = project;

    this.userData.skillset.push(addInp);

   console.log(addInp);
  }
  edit(){
    this.displayData = "none";
    this.displayInp = "block";
    this.ediT = false;
  }
  add(){
    this.displayskill = "block";
  }
  permedit(){
    this.dispermDt = "none";
    this.dispermInp = "block";
    this.perediT = false;
  }
  resdedit(){
    this.disresDt = "none";
    this.disresInp = "block";
    this.resediT = false;
  }
  proedit(){
    this.proediT = false;
    this.displayproData = "none";
    this.displayproInp = "block";
  }
}
