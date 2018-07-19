import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'
import { HttpClient } from '@angular/common/http';

import { FilterService } from '../../../services/filter.service'
import { GET_LOGS } from '../../../constants/endpoints';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(
      private stateService: StateService,
      private http: HttpClient,
      private filterService: FilterService,
  ) { }

  client_id: ''

  scrums: {
      
  }

  ngOnInit() {
      this.http.get(GET_LOGS())
          .subscribe(
              data => {
                  this.scrums = data
              }
          );
      // if(!this.client_id){
      //     this.stateService.go('slack-login')
      // }
  }

}
