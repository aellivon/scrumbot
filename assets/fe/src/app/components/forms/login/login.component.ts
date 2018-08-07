import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular';
import { AuthenticationService } from 'app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
      private stateService: StateService,
      private authService: AuthenticationService,
  ) { }

  ngOnInit() {
      if(localStorage.getItem('user')){
        this.stateService.go('scrumboard')
      }
  }

  invalid_message;

  login(username, password){
        this.authService.loginUser({"username":username.value, "password":password.value})
                .subscribe(()=>{
                    localStorage.setItem('user',username.value)
                    this.stateService.go('scrumboard')},
                    ()=>{
                    this.invalid_message="INVALID USERNAME OR PASSWORD"
                    }
                )
  }


}
