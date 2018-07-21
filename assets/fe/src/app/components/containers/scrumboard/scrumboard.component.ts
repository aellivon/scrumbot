import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'
import { HttpClient } from '@angular/common/http';
import { IMyDpOptions } from 'mydatepicker';
import { NgForm } from '@angular/forms';

import { FilterService } from '../../../services/filter.service';
import { GET_LOGS, GET_ISSUES,
          GET_TEAM_MEMBERS,
          GET_TEAM_PROJECTS,
          UPDATE_ISSUE_STATUS,  } from '../../../constants/endpoints';

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
  projects: {}
  post_status: {
    status: ""
  }

  ngOnInit() {
      this.fetchIssues()
      this.fetchLogs()
      this.fetchUsers()
      this.fetchProjects()
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
                     },
                    'ALL',
                    'ALL')
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
                     },
                    'ALL',
                    'ALL')
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

  fetchProjects(){
      this.http.get(GET_TEAM_PROJECTS())
          .subscribe(
              data => {
                  this.projects = data
              }
          );
  }

  setFilter(type, status, dateFilterForm, username, project){
      if(!this.scrums || !this.issues){
          return
      }
      this.filtered_scrum = this.filterService.filterScrum(type, dateFilterForm, username, project, this.scrums)
      this.filtered_issues = this.filterService.filterIssues(status, dateFilterForm, username, project, this.issues)
  }

  updateStatus(id, status){
      this.http.post(UPDATE_ISSUE_STATUS(id), {"status":status})
      .subscribe(
          () => this.fetchIssues()
      );
  }

}
