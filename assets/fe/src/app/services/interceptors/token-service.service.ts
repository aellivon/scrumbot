import * as _ from 'lodash';

import { Injectable } from '@angular/core';

import { 
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { StateService } from '@uirouter/angular';


import { AuthenticationService } from '../authentication.service';



@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor(
    private auth  : AuthenticationService,
    private state : StateService
  ) { }

  intercept (r: HttpRequest<any>, n: HttpHandler) : Observable <HttpEvent <any>> {
    let req = r;
    if(this.auth.authenticate()){

       req = r.clone({ headers: r.headers.set('Authorization', this.authtoken()) });
       // Refreshes the token 
       if(this.auth.getRefreshTokenCallState() === false){
          this.auth.setRefreshTokenCallState(true);
          this.auth.refreshToken();
       }
      
    }

    return n.handle(req).pipe(
      tap(e => {
        if (e instanceof HttpResponse) return e;

      },
      err => {
        console.log(err);
        if (err instanceof HttpErrorResponse) {
          this.checkPermission(err);
          return err; };
      })
    );
  }

  // Get user token from the local storage
  authtoken () {
    let t = _.get(this.auth.getToken(), ['token'], null);
    return 'JWT ' + t;
  }

  // let the user re-login to generate
  // a new authentication token.
  flagToken () {
    this.auth.rmToken();
    this.state.go('login');
  }

  checkPermission(err){
    // This returns unauthorize error which flags the token
    console.log("401");
    if(err.status === 401){
      this.flagToken();
    }
  }
}
