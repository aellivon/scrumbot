import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'
import { HttpClient } from '@angular/common/http';
import { IMyDpOptions } from 'mydatepicker';
import { NgForm } from '@angular/forms';

import { FilterService } from '../../../services/filter.service';
import { GET_LOGS } from '../../../constants/endpoints';
import { GET_ISSUES } from '../../../constants/endpoints';
import { GET_TEAM_MEMBERS } from '../../../constants/endpoints';
import { UPDATE_ISSUE_STATUS } from '../../../constants/endpoints';

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
        day: new Date().getDate() + 6
      }
    };

  constructor(
      private stateService: StateService,
      private http: HttpClient,
      private filterService: FilterService,
  ) { }

  scrums
  issues
  filtered_scrum: {}
  filtered_issues: {}
  users: {}
  post_status: {
    status: ""
  }

  ngOnInit() {
      this.fetchIssues()
      this.fetchLogs()
      this.fetchUsers()
  }

  fetchLogs(){
      this.http.get(GET_LOGS())
          .subscribe(
              data => {
                  this.scrums = data
                  this.setFilter(
                    'ALL',
                    'ALL',{
                        from: this.from_model,
                        to: this.to_model
                     }
                    ,'ALL')
              }
          );
  }

  fetchIssues(){
      this.http.get(GET_ISSUES())
          .subscribe(
              data => {
                  this.issues = data
                  this.setFilter(
                    'ALL',
                    'ALL',{
                        from: this.from_model,
                        to: this.to_model
                     }
                    ,'ALL')
              }
          );
  }

  fetchUsers(){
      this.http.get(GET_TEAM_MEMBERS())
          .subscribe(
              data => {
                  this.users = data
              }
          );
  }

  setFilter(type, status, dateFilterForm, username){
      if(!this.scrums || !this.issues){
          return
      }
      this.filtered_scrum = this.filterService.filterScrum(type, dateFilterForm, username, this.scrums)
      this.filtered_issues = this.filterService.filterIssues(status, dateFilterForm, username, this.issues)
  }

  updateStatus(id, status){
      this.http.post(UPDATE_ISSUE_STATUS(id), {"status":status})
      .subscribe(
          () => this.fetchIssues()
      );
  }

}
