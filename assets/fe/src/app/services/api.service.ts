import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StateService } from '@uirouter/angular'

// import { API_CREATE } from '../constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
      private http: HttpClient,
      private stateService: StateService
  ) { }

  users={}

  set_list(endpoint){
      this.http.get(endpoint)
          .subscribe(
              data => {
                  this.users = data
              }
          );
  }

  get_list(){
    return this.users
  }

  create(api_name, data){
      // var request = this.http.post(API_CREATE(api_name),data)
      // this.http.post(API_CREATE(api_name), data)
      // .subscribe(
      //     data => console.log(data),
      //     error => this.stateService.go('join-team')
      // );
  }

}
