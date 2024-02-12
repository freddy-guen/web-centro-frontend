import { createEntityAdapter } from "@ngrx/entity";
import {User, UserModel} from "../model/User.model";


export const UserAdapter = createEntityAdapter<User>();

export const UserState : UserModel = UserAdapter.getInitialState();

/*export const UserState : UserModel = {
  list : [],
  user : {
    lastName : "",
    firstName : "",
    email : "",
    password : "",
    status : false,
    role : "USER"
  },
  error : ''
};*/
