import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  isValidate:boolean = true;
  ngOnInit(): void {
  }
  login(eve, user,pass){
    eve.preventDefault();
    if(user['value'] == "gupta" && pass['value'] == "global123"){
      console.log(user['value'],pass['value']);
      this.isValidate = true;
      this.router.navigate(['/allEmployee'])
    }
    else{
      this.isValidate = false;
      console.log(this.isValidate);
    }
    user['value'] = "";
    pass['value'] = "";
  }
  
}
