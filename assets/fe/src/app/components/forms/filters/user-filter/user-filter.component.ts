import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GET_TEAM_MEMBERS } from '../../../../constants/endpoints';

@Component({
  selector: 'app-user-filter',
  templateUrl: './user-filter.component.html',
  styleUrls: ['./user-filter.component.css']
})
export class UserFilterComponent implements OnInit {

  constructor(
      private http: HttpClient,
  ) { }

  users: {}

  ngOnInit() {
      this.http.get(GET_TEAM_MEMBERS())
          .subscribe(
              data => {
                  this.users = data
              }
          );
  }

  setFilter(type){

  }
}
