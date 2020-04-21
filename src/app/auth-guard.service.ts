import { Injectable } from '@angular/core';
import {AuthserviceService} from './authservice.service'
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthserviceService, public router: Router) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
