import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'
import { HttpClient } from '@angular/common/http';
import { IMyDpOptions } from 'mydatepicker';
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

    from_model: any = {
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate()
      }
    };
    to_model: any = {
      date: {
        year: new Date().getFullYear(),
        month: new Date().getMonth() + 1,
        day: new Date().getDate() + 7
      }
    };

  constructor(
      private stateService: StateService,
      private http: HttpClient,
      private filterService: FilterService,
  ) { }

  scrums
  filtered: {}
  users: {}

  ngOnInit() {
      this.http.get(GET_LOGS())
          .subscribe(
              data => {
                  this.scrums = data
                  this.setFilter(
                    'ALL',{
                        from: this.from_model,
                        to: this.to_model
                     }
                    ,'ALL')
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
      this.filtered = this.filterService.filterData(type, dateFilterForm, username, this.scrums)
  }

}
