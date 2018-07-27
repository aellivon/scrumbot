import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { NgForm } from '@angular/forms';

import { FilterService } from '../../../services/filter.service';
import { ScrumDataService } from '../../../services/scrum-data.service';
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
      private scrumDataService: ScrumDataService,
  ) { }

  // scrum_data: any
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

  // filter_issue_detail: boolean = false;
  filtered_scrum: any;

  disabled_from = {
        year: this.today.getFullYear(),
        month: this.today.getMonth() + 1,
        day: new Date(this.today.getFullYear(),
                      this.today.getMonth(),
                      this.today.getDate()-6).getDate()
      }

  disabled_to = {
        year: this.today.getFullYear(),
        month: this.today.getMonth() + 1,
        day: this.today.getDate() + 1
      }

    fromOptions: INgxMyDpOptions = {
        dateFormat: 'mmm dd yyyy',
        disableSince: this.disabled_to
    };

    toOptions: INgxMyDpOptions = {
        dateFormat: 'mmm dd yyyy',
        disableUntil: this.disabled_from
    };

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
                  this.scrumDataService.setScrums(data);
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

  // setDateFilter(dateFilterForm){
  //     this.filter_from = new Date(dateFilterForm.from.date.year,
  //                                 dateFilterForm.from.date.month-1,
  //                                 dateFilterForm.from.date.day);
  //     this.filter_to = new Date(dateFilterForm.to.date.year,
  //                               dateFilterForm.to.date.month-1,
  //                               dateFilterForm.to.date.day);
  // }

  setDateFromFilter(from){
      this.disabled_from.year=from.date.year
      this.disabled_from.month=from.date.month
      this.disabled_from.day=from.date.day - 1

      this.filter_from = new Date(from.date.year,
                                  from.date.month-1,
                                  from.date.day);
  }

  setDateToFilter(to){
      this.disabled_to.year=to.date.year
      this.disabled_to.month=to.date.month
      this.disabled_to.day=to.date.day + 1

      this.filter_to = new Date(to.date.year,
                                  to.date.month-1,
                                  to.date.day);
  }

  getIssue(id){
      // this.filter_issue_detail = true;
      this.filtered_scrum = [this.scrumDataService.getScrums().find(scrum => {
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
            this.fetchIssues()
          }
      );
  }

  isWithinDate(scrum_date, filter_from, filter_to){
    return (new Date(scrum_date).setHours(0,0,0,0) >= filter_from.setHours(0,0,0,0) &&
            new Date(scrum_date).setHours(0,0,0,0) <= filter_to.setHours(0,0,0,0))
  }

  getTotalHours(user, project, from, to){
    var filtered_data = this.filterService.filterScrum(user, project, from, to, this.scrumDataService.getScrums())
    return filtered_data.map(scrum => scrum.hours).reduce((x,y) => (+x)+(+y), 0)
  }

  getScrum(keyword){
    this.filtered_scrum = this.filterService.filterScrumSearch(keyword, this.scrumDataService.getScrums())
  }

  hasIssues(scrum){
    var pending = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Pending'
                  })
    var resolved = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Resolved'
                  })
    var closed = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Closed'
                  })
    return (this.filter_pending && pending.length!=0) ||
            (this.filter_resolved && resolved.length!=0) ||
            (this.filter_closed && closed.length!=0)
  }

  hasPending(scrum){
    var pending = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Pending'
                  })
    var resolved = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Resolved'
                  })
    var closed = scrum.issue_logs.filter(issue =>{
                       return issue.status == 'Closed'
                  })
    return (pending.length!=0) ||
            (this.filter_resolved && resolved.length!=0) ||
            (this.filter_closed && closed.length!=0)
  }

}
