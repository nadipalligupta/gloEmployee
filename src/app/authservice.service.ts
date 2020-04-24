import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  isLoggedIn = false;
  constructor() { }
    // ...
  public isAuthenticated(): boolean {
   const token = localStorage.getItem('token')
    return token=='true'?true:false;
  }

  LogIn(){
    this.isLoggedIn = !this.isLoggedIn
    localStorage.setItem('token','true');
  }

   LogOut(){
    this.isLoggedIn = !this.isLoggedIn
    localStorage.removeItem('token');
  }


}
