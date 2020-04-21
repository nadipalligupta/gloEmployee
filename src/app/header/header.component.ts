import { Component, OnInit } from '@angular/core';
import {AuthserviceService} from '.././authservice.service'
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authservice :AuthserviceService,private router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    this.authservice.LogOut()
    this.router.navigate(['/login'])

  }

}
