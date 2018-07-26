import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
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

    myOptions: INgxMyDpOptions = {
        dateFormat: 'mm.dd.yyyy',
    };

    today = new Date()

    from_model: any = {
      date: {
        year: this.today.getFullYear(),
        month: this.today.getMonth() + 1,
        day: new Date(this.today.getFullYear(),
                      this.today.getMonth(),
                      this.today.getDate()-6).getDate()
      }
    };

    to_model: any = {
      date: {
        year: this.today.getFullYear(),
        month: this.today.getMonth() + 1,
        day: this.today.getDate()
      }
    };

  constructor(
      private http: HttpClient,
      private filterService: FilterService,
  ) { }

  scrum_data: any
  issues_data: any
  users: {}
  projects: {}
  post_status: {
    status: ""
  }

  filter_user = ''
  filter_project = ''

  filter_done: boolean = true;
  filter_wip: boolean = true;
  filter_hours: boolean = true;

  filter_pending: boolean = true;
  filter_resolved: boolean = false;
  filter_closed: boolean = false;

  filter_from: Date = new Date(this.today.getFullYear(),
                      this.today.getMonth(),
                      this.today.getDate()-6);
  filter_to: Date = this.today;

  filter_issue_detail: boolean = false;
  filtered_scrum: any;

  ngOnInit() {
      this.fetchIssues()
      this.fetchScrums()
      this.fetchUsers()
      this.fetchProjects()
  }

  fetchScrums(){
      this.http.get(GET_LOGS())
          .subscribe(
              data => {
                  this.scrum_data = data
                  this.filtered_scrum = data
              }
          );
  }

  fetchIssues(){
      this.http.get(GET_ISSUES())
          .subscribe(
              data => {
                  this.issues_data = data
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

  setDateFilter(dateFilterForm){
      this.filter_from = new Date(dateFilterForm.from.date.year,
                                  dateFilterForm.from.date.month-1,
                                  dateFilterForm.from.date.day);
      this.filter_to = new Date(dateFilterForm.to.date.year,
                                dateFilterForm.to.date.month-1,
                                dateFilterForm.to.date.day);
  }

  getIssue(id){
      this.filter_issue_detail = true;
      this.filtered_scrum = [this.scrum_data.find(scrum => {
          return scrum.issue_logs.find(issue => {
                     return issue.id == id
                  })
      })]
  }

  updateStatus(id, status){
      this.http.post(UPDATE_ISSUE_STATUS(id), {"status":status})
      .subscribe(
          (data) => {
            this.fetchScrums()
          }
      );
  }

  getTotalHours(user, project, from, to){
    var filtered_data = this.filterService.filterScrum(user, project, from, to, this.scrum_data)
    return filtered_data.map(scrum => scrum.hours).reduce((x,y) => (+x)+(+y), 0)
  }

  // hasPending(){
  //   if(!this.filtered_issues){
  //       return false
  //   }
  //   return this.filterService.filterPending(this.filtered_issues)
  // }

}
