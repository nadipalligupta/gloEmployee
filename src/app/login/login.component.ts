import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthserviceService} from '.././authservice.service'
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private authservice :AuthserviceService) { }
  isValidate:boolean = true;
  ngOnInit(): void {
  }
  login(eve, user,pass){
    eve.preventDefault();
    if(user['value'] == "gupta" && pass['value'] == "global123"){
      console.log(user['value'],pass['value']);
      this.isValidate = true;
      this.authservice.LogIn();
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
