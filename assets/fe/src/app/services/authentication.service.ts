import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '@uirouter/angular';
import { AUTH_KEY } from '../constants/config';

import { LOGIN_USER, REFRESH_TOKEN } from 'app/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
      private stateService: StateService,
      private http: HttpClient,
  ) { }

  loginUser(credentials){
    // Log in a user
      return this.http.post(LOGIN_USER(),credentials)
      .toPromise()
      .then(
        data => {
          this.setToken(data);
          this.setUser(credentials.username);
          return data;
        }
     )
     .catch(
        errors => {
          return Promise.reject(errors.error);
        }
     )
  }


  refreshToken(){
    // Refreshes the token which the jwt recommends to 
    //   make the token secure. {"token": EXISTING_TOKEN}
    return this.http.post(REFRESH_TOKEN(),this.getToken())
      .toPromise()
      .then(
        data => {
          this.setToken(data);
          this.setRefreshTokenCallState(false);
          console.log(data);
          return data;
        }
     )
     .catch(
        errors => {
          this.setRefreshTokenCallState(false);
          return Promise.reject(errors.error);
        }
     )
  }

  setUser(username){
    // Set user so there won't be any side effects on
    //   refactoring
    console.log(username);
    localStorage.setItem('user', username);
  }

  setToken (d) {
     // Setting token to the local storage
      (<any>window).localStorage[AUTH_KEY] = JSON.stringify(d);
      return d;
  }

  setRefreshTokenCallState(state){
    (<any>window).localStorage['token_calling'] = state;
  }

  getRefreshTokenCallState(){
    let is_still_calling = (<any>window).localStorage['token_calling'];
    if (is_still_calling === null) {return false}
    // since items from local storage are strings
    is_still_calling = (is_still_calling === 'true');
    return is_still_calling;
  } 

  getToken () {
      let d = (<any>window).localStorage[AUTH_KEY];
      if (!d) { return null; };

      return JSON.parse(d);
  }

  rmToken () {
      (<any>window).localStorage.removeItem(AUTH_KEY);
      (<any>window).localStorage.removeItem('user');
  }

  authenticate(){
      if(!localStorage.getItem('user')){
        this.stateService.go('login')
      }
      return localStorage.getItem('user')
  }
}
