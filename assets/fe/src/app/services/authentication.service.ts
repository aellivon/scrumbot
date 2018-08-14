import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '@uirouter/angular';

import { LOGIN_USER } from 'app/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
      private stateService: StateService,
      private http: HttpClient,
  ) { }

  loginUser(credentials){
      return this.http.post(LOGIN_USER(),credentials)
  }
  
  authenticate(){
      if(!localStorage.getItem('user')){
        this.stateService.go('login')
      }
      return localStorage.getItem('user')
  }
}
