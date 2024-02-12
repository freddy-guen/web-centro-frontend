import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { showAlertAction } from 'src/app/store/common/app.action';
import { User } from 'src/app/store/model/User.model';
import { registerUserAction } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  constructor(private formBuilder : FormBuilder, private store : Store) {}


  registerForm = this.formBuilder.group({
    firstName : this.formBuilder.control('', Validators.required),
    lastName : this.formBuilder.control('', Validators.required),
    email : this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password : this.formBuilder.control('', Validators.required),  //TODO
    passwordConfirm : this.formBuilder.control('', Validators.required)  //TODO
  });

  register() {
    if(this.registerForm.valid) {

      if(this.registerForm.value.password === this.registerForm.value.passwordConfirm) {
        //on construit le DTO
        const userObj : User = {
        firstName : this.registerForm.value.firstName as string,
        lastName : this.registerForm.value.lastName as string,
        email : this.registerForm.value.email as string,
        password : this.registerForm.value.password as string,
        status : false,
        role : 'USER'
        };

        //on dispatch l'action souhaitée
        this.store.dispatch(registerUserAction({userData : userObj}));

      } else {
        this.store.dispatch(showAlertAction({message : 'Les mots de passe ne sont pas pareils.', resultType : 'fail'}))
      }
    }
  }

  quit() {
    
  }

}
