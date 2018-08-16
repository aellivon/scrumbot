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
      // if(localStorage.getItem('user')){
      //   this.stateService.go('scrumboard')
      // }
  }

  invalid_message;

  login(username, password){
    //. A log in promise
    const x = this.authService.loginUser({"username":username.value, "password":password.value});
    x.then(
      data => {
        console.log(data);

        
        this.stateService.go('scrumboard');
      }
    )
    .catch(
      errors => {
        console.log(errors);
        if(errors.non_field_errors){
         this.invalid_message = errors.non_field_errors
        
        }else{
           this.invalid_message="Please fill up the form!";
        }
      }
    )
  }
}
