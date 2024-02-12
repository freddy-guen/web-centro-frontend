import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { UserLogin } from 'src/app/store/model/User.model';
import { loginUserAction } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private store : Store) {}

  ngOnInit(): void {
    localStorage.clear();
  }

  loginForm = this.formBuilder.group({
    email : this.formBuilder.control('', Validators.required),
    password : this.formBuilder.control('', Validators.required)
  })

  login() {

    if(this.loginForm.valid) {
      //On construit l'objet (DTO)
      const userLoginObj : UserLogin = {
        email : this.loginForm.value.email as string,
        password : this.loginForm.value.password as string
      }

      //on dispatch l'action souhaitée
      this.store.dispatch(loginUserAction({userLogin : userLoginObj}));
    }

  }

  quit() {

  }

}
