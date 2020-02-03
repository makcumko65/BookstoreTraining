import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/models/userLoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NavBarComponent } from 'src/app/nav-bar/nav-bar.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : UserLoginModel;
  loginForm : FormGroup;

  constructor(private _userService : UserService,private _router : Router
    ,private formBuilder: FormBuilder, private navbar : NavBarComponent
    ,private _toastr: ToastrService) { 
    this.loginForm = this.formBuilder.group({
      email : ['', Validators.email],
      password : ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit() {
    if (localStorage.getItem('token') != null)
      this._router.navigateByUrl("/");
      
  }

  login(user: UserLoginModel){
    this._userService.login(user).subscribe(
      (res : any) => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('role', res.role);
        this._router.navigateByUrl("/");
      },
      err => {
        this._toastr.error(err.error.message);
      }
    );
  }
}
