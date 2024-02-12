import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { emptyAction, showAlertAction } from "./app.action";
import { exhaustMap, map } from "rxjs";


@Injectable()
export class AppEffects {

    constructor(private action$ : Actions, private snackBar : MatSnackBar){}


    showAlertEffect = createEffect(
        ()=>this.action$.pipe(
            ofType(showAlertAction),
            exhaustMap((action)=>{
                 return this.showSnackBarAlert(action.message, action.resultType).afterDismissed().pipe(
                    map(()=>{
                        return emptyAction();
                    })
                 )
            })
        )
    );


    showSnackBarAlert(message : string, resultType : string = 'fail') {

        let classLabel = resultType=='pass' ? 'green-snackbar' : 'red-snackbar';

        return this.snackBar.open(
            message, 'OK',
            {
                verticalPosition : 'top',
                horizontalPosition : 'end',
                duration : 5000,
                panelClass : [classLabel]
            } 
        )
    }

}