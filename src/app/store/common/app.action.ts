import { createAction, props } from "@ngrx/store";


export const SHOW_ALERT = '[app] afficher une alerte';
export const EMPTY_ACTION = '[app] vide';

export const showAlertAction = createAction(SHOW_ALERT, props<{message:string, resultType:string}>());
export const emptyAction = createAction(EMPTY_ACTION);