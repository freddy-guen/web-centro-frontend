import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { UserService } from "src/app/service/user.service";
import { catchError, exhaustMap, map, of } from "rxjs";
import { loginUserAction, registerUserAction } from "./user.action";
import { showAlertAction } from "../common/app.action";
import { Router } from "@angular/router";


@Injectable()
export class UserEffect {

  constructor(private action$ : Actions, private userService : UserService, private route : Router) {}

  registerUserEffect = createEffect(
    ()=>this.action$.pipe(
      ofType(registerUserAction),
      exhaustMap((action)=>{
        return this.userService.registerUser(action.userData).pipe(
          map(()=>{
            this.route.navigate(['connexion']);
            return showAlertAction({message : 'Inscription réussie. Veuillez comfirmer votre email en cliquant sur le lien reçu par mail.', resultType : 'pass'});
          }),
          catchError((err)=>of(
            showAlertAction({message : 'Erreur lors de l\'inscription, veuillez reéssayer.', resultType : 'fail'}))
          )
        )
      })
    )
  );

  loginUserEffect = createEffect(
    ()=>this.action$.pipe(
      ofType(loginUserAction),
      exhaustMap((action)=>{
        return this.userService.loginUser(action.userLogin).pipe(
          map((data)=>{
            if(data.length > 0) {
              
              const userData = data[0];

              //Cas des admins (ADMIN ou SUPER ADMIN [ROOT])
              if(userData.role === 'ADMIN' || userData.role === 'ROOT'){
                if(userData.status === true) {
                  this.userService.setUserDataToLocalStorage(userData);
                  this.route.navigate(['administration']);
                  return showAlertAction({message : 'Connexion réussie.', resultType : 'pass'});
                } else {
                  return showAlertAction({message : 'Impossible de se connecter. Veuillez activer votre compte', resultType : 'warn'});
                }
              }

              //Cas des utilisateurs classiques (USER)
              if(userData.status === true) {
                this.userService.setUserDataToLocalStorage(userData);
                this.route.navigate(['']);
                return showAlertAction({message : 'Connexion réussie.', resultType : 'pass'});
              } else {
                return showAlertAction({message : 'Impossible de se connecter. Veuillez activer votre compte', resultType : 'warn'});
              }
              
            } else {
              return showAlertAction({message : 'Connexion échouée. Email ou mot de passe incorrect', resultType : 'fail'});
            }
            
          }),
          catchError((err)=>of(
            showAlertAction({message : 'Erreur lors de la connexion, veuillez reéssayer.', resultType : 'fail'}))
          )
        )
      })
    )
  )

}