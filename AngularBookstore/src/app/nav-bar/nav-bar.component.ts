import { Component, OnInit, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class NavBarComponent implements OnInit {

  auth : boolean;
  constructor(private router:Router, private userService: UserService){}

  onLogout(){
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigateByUrl("/");
    this.auth = false;
  }
  loginOrRegistration(bool : boolean){
    this.auth = bool;
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this.auth = true
    else
      this.auth = false;
  }

}
