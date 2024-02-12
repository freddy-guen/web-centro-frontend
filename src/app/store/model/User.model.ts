import { EntityState } from "@ngrx/entity"



export interface User {
  lastName : string,
  firstName : string,
  email : string,
  password : string,
  status : boolean,
  role : string
}

export interface UserLogin {
  email : string,
  password : string
}

export interface UserInfo {
  lastName : string,
  firstName : string,
  email : string,
  status : boolean,
  role : string
}

export interface UserModel extends EntityState<User>{
  /*list : User[],
  user : User,
  error : string*/
}
