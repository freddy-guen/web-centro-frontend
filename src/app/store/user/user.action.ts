import { createAction, props } from "@ngrx/store";
import { User, UserLogin } from "../model/User.model";


export const REGISTER_USER = '[auth] begin register user';
export const LOGIN_USER = '[auth] begin login user';


export const registerUserAction = createAction(REGISTER_USER, props<{userData : User}>());
export const loginUserAction = createAction(LOGIN_USER, props<{userLogin : UserLogin}>());