import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'
import { HttpClient } from '@angular/common/http';
import {IMyDpOptions} from 'mydatepicker';
import { NgForm } from '@angular/forms';

import { FilterService } from '../../../services/filter.service';
import { GET_LOGS } from '../../../constants/endpoints';
import { GET_TEAM_MEMBERS } from '../../../constants/endpoints';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

    myDatePickerOptions: IMyDpOptions = {
        dateFormat: 'dd.mm.yyyy',
        width: '150'
    };

    from_model: any = { date: { year: 2018, month: 10, day: 9 } };
    to_model: any = { date: { year: 2018, month: 10, day: 9 } };

  constructor(
      private stateService: StateService,
      private http: HttpClient,
      private filterService: FilterService,
  ) { }

  client_id: ''

  scrums: {}
  filtered: {}
  users: {}

  ngOnInit() {
      this.http.get(GET_LOGS())
          .subscribe(
              data => {
                  this.scrums = data
                  this.setFilter('','','')
              }
          );

      this.http.get(GET_TEAM_MEMBERS())
          .subscribe(
              data => {
                  this.users = data
              }
          );
  }

  setFilter(type, dateFilterForm, username){
      console.log(dateFilterForm.from)
      console.log(dateFilterForm.to)
      console.log(new Date(this.scrums[0].date_created).toDateString())
      // this.filtered = this.scrums.filter(scrum => scrum.log_type.includes(type) && scrum.user.includes(username))
  }

}
