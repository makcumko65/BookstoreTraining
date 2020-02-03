import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User;
  registrationForm : FormGroup;

  constructor(private _userService : UserService, private _toast: ToastrService
    ,private formBuilder: FormBuilder, private _router: Router) { 
    this.registrationForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['',Validators.required],
      email: ['', Validators.email],
      password: ['', [Validators.required, Validators.minLength(4)]]
    })
  }

  ngOnInit() {
  }

  register(user: User){
    this._userService.createUser(user).subscribe(data => this._router.navigateByUrl('/login'));
  }

}
