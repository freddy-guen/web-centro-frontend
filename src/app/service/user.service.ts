import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User, UserInfo, UserLogin} from "../store/model/User.model";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  ApiBaseUrl = 'http://localhost:3000/users';

  constructor(private http : HttpClient) { }

  registerUser(userData : User) {
    return this.http.post(this.ApiBaseUrl, userData);
  }

  loginUser(userData : UserLogin) {
    return this.http.get<UserInfo[]>(this.ApiBaseUrl + '?email=' + userData.email + '&password=' + userData.password);
  }

  setUserDataToLocalStorage(userData : UserInfo) {
    localStorage.setItem('userData', JSON.stringify(userData));
  }

  getUserDataToLocalStorage() {
    let userInfo : UserInfo = {
      lastName : '',
      firstName : '',
      email : '',
      status : false,
      role : ''
    };

    if(localStorage.getItem('userData') != null) {
      let jsonString = localStorage.getItem('userData') as string;
      userInfo = JSON.parse(jsonString);
    }

    return userInfo;
  }

  isAuthenticated() {
    let userInfo : UserInfo = this.getUserDataToLocalStorage();

    if(userInfo.email != '' && userInfo.email != null) {
      return true;
    } else {
      return false;
    }
  }

  isUser() {
    let userInfo : UserInfo = this.getUserDataToLocalStorage();

    if(userInfo.email != '' && userInfo.email != null && userInfo.role === 'USER') {
      return true;
    } else {
      return false;
    }
  }

  isAdmin() {
    let userInfo : UserInfo = this.getUserDataToLocalStorage();

    if(userInfo.email != '' && userInfo.email != null && userInfo.role === 'ADMIN') {
      return true;
    } else {
      return false;
    }
  }

  isRoot() {
    let userInfo : UserInfo = this.getUserDataToLocalStorage();

    if(userInfo.email != '' && userInfo.email != null && userInfo.role === 'ROOT') {
      return true;
    } else {
      return false;
    }

  }

  isAdminOrRoot() {
    return this.isAdmin() || this.isRoot();
  }



  getAllUsers() {
    return this.http.get<User[]>(this.ApiBaseUrl);
  }

  /*TODO : à supprimer après*/
  getUserById(id : number) {
    return this.http.get<User>(this.ApiBaseUrl + '/' + id);
  }
  /*TODO : à supprimer après*/
  deleteUserById(id : number) {
    return this.http.delete(this.ApiBaseUrl + '/' + id);
  }

  getUserByEmail(email : string) : Observable<User> {
    return this.http.get<User>(this.ApiBaseUrl + '?email=' + email);
  }

  deleteUser(email : string) {
    return this.http.delete(this.ApiBaseUrl + '?email=' + email);
  }

  updateUser(user : User) {
    return this.http.put(this.ApiBaseUrl + '/' + user.email, user);
  }

  

}
