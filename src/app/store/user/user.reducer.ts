import { createReducer } from "@ngrx/store"
import { UserState } from "./user.state"


const UserReducer = createReducer(UserState);


export function UserReducerFn(state : any, action : any) {

}