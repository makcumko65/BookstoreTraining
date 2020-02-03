import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserLoginModel } from '../models/userLoginModel';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  createUser(user : User){
    return this.http.post(environment.apiBaseURI + '/user/register', user);
  }

  login(user : UserLoginModel){
    return this.http.post(environment.apiBaseURI + '/user/login', user);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  isAdmin()
  {
    if(this.loggedIn()){
      if(localStorage.getItem('role') == 'Admin')
        return true;
    }
    return false;
  }

  roleMatch(allowedRoles): boolean {
    var isMatch = false;
    allowedRoles.forEach(element => {
      if (localStorage.getItem('role') == element) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }
}
