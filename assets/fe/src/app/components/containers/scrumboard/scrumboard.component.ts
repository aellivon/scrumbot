import * as _ from 'underscore';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

import { DataService } from 'app/services/data.service';
import { ScrumDataService } from 'app/services/scrum-data.service';
import { FilterService } from 'app/services/filter.service';
import { SearchService } from 'app/services/search.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { StateService } from '@uirouter/angular';
import { GET_ISSUES,
          UPDATE_ISSUE_STATUS,
          UPDATE_ISSUE_DEADLINE, OVERALL_RESULTS } from 'app/constants/endpoints';

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  today: Date = new Date();

  filter_to: Date = new Date();
  filter_from: Date = new Date(this.filter_to.getFullYear(),
                      this.filter_to.getMonth(),
                      this.filter_to.getDate()-6);

    from_model: any = {
      date: {
        year: this.filter_from.getFullYear(),
        month: this.filter_from.getMonth() + 1,
        day: this.filter_from.getDate()
      }
    };

    to_model: any = {
      date: {
        year: this.filter_to.getFullYear(),
        month: this.filter_to.getMonth() + 1,
        day: this.filter_to.getDate()
      }
    };


  constructor(
      private http: HttpClient,
      private filterService: FilterService,
      private searchService: SearchService,
      private dataService: DataService,
      private stateService: StateService,
      private authService: AuthenticationService,
  ) { }

  scrums_bydate: any
  issues: any
  users: {}
  projects: {}

  filter_user = ''
  filter_project = ''

  filtered_scrum: any;

  from_yesterday = new Date(this.filter_from.getFullYear(),
                      this.filter_from.getMonth(),
                      this.filter_from.getDate()-1)

  to_tomorrow = new Date(this.filter_to.getFullYear(),
                      this.filter_to.getMonth(),
                      this.filter_to.getDate()+1)

  disabled_from = {
        year: this.from_yesterday.getFullYear(),
        month: this.from_yesterday.getMonth() + 1,
        day: this.from_yesterday.getDate()
      }

  disabled_to = {
        year: this.to_tomorrow.getFullYear(),
        month: this.to_tomorrow.getMonth() + 1,
        day: this.to_tomorrow.getDate()
      }

  fromOptions: INgxMyDpOptions = {
      dateFormat: 'mmm dd yyyy',
      disableSince: this.disabled_to
  };

  toOptions: INgxMyDpOptions = {
      dateFormat: 'mmm dd yyyy',
      disableUntil: this.disabled_from
  };

  model: any = {beginDate: this.from_model.date,
                        endDate: this.to_model.date};

  show_object = {
    id: '',
    show: true,
  };

  deadline: Date;

  logged_user;

  ngOnInit() {
      this.authService.authenticate()
      this.logged_user = localStorage.getItem('user')
      this.fetchIssues()
      this.fetchScrums()
      this.fetchUsers()
      this.fetchProjects()

  }

  fetchScrums(){
      this.dataService.fetchScrums()
          .subscribe(
              data => {
                  this.scrums_bydate = data
                  var scrums = _.map(this.scrums_bydate, scrum => {return scrum.scrums})
                  console.log(_.uniq(scrums, true, 'date_created'))
                  // this.scrums.map(date_group => {
                  //   date_group.scrums.map(scrum => {
                  //     scrum.issue_logs.map(issue => {
                  //                     issue.open = false
                  //                 })
                  //     return scrum
                  //   })
                  // })
                  this.filtered_scrum = data
              }
          );
  }

  fetchIssues(){
      this.dataService.fetchIssues()
          .subscribe(
              data => {
                  this.issues = data
              }
          );
  }

  fetchUsers(){
      this.dataService.fetchUsers()
          .subscribe(
              data => {
                  this.users = data
              }
          );
  }

  fetchProjects(){
      this.dataService.fetchProjects()
          .subscribe(
              data => {
                  this.projects = data
              }
          );
  }

  setDateFromFilter(from){
      this.filter_from = new Date(from.date.year,
                                  from.date.month-1,
                                  from.date.day);

      var yesterday = new Date(this.filter_from.getFullYear(),
                      this.filter_from.getMonth(),
                      this.filter_from.getDate()-1)

      this.disabled_from.year = yesterday.getFullYear()
      this.disabled_from.month = yesterday.getMonth()+1
      this.disabled_from.day = yesterday.getDate()
  }

  setDateToFilter(to){
      this.filter_to = new Date(to.date.year,
                                  to.date.month-1,
                                  to.date.day);

      var tomorrow = new Date(this.filter_to.getFullYear(),
                      this.filter_to.getMonth(),
                      this.filter_to.getDate()+1)

      this.disabled_to.year = tomorrow.getFullYear()
      this.disabled_to.month = tomorrow.getMonth()+1
      this.disabled_to.day = tomorrow.getDate()
  }

  getIssue(id){
      this.filtered_scrum = [this.scrums_bydate.find(scrum => {
          return scrum.issue_logs.find(issue => {
                     return issue.id == id
                  })
      })]
  }

  updateStatus(id, status){
      this.http.post(UPDATE_ISSUE_STATUS(id), {"status":status})
      .subscribe();
      var index = this.issues.findIndex(issue => {
         return issue.id == id
      })
      this.issues[index].status = status
      var group_index = this.scrums_bydate.findIndex(scrum => {
        return scrum.scrums.find(scrum =>{
           return scrum.issue_logs.find(issue => {
               return issue.id == id
            })
        })
      })
      var scrum_index = this.scrums_bydate[group_index].scrums.findIndex(scrum => {
         return scrum.issue_logs.find(issue => {
             return issue.id == id
          })
      })
      var issue_index = this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.findIndex(issue => {
         return issue.id == id
      })
      this.scrums_bydate[group_index].scrums[scrum_index].issue_logs.splice(issue_index,1)
  }

  updateDeadline(id, deadline){
      if (deadline){
        this.http.post(UPDATE_ISSUE_DEADLINE(id), {"deadline":deadline})
        .subscribe();
      }
  }

  isWithinDate(scrum_date, filter_from, filter_to){
    return (new Date(scrum_date).setHours(0,0,0,0) >= filter_from.setHours(0,0,0,0) &&
            new Date(scrum_date).setHours(0,0,0,0) <= filter_to.setHours(0,0,0,0))
  }

  getTotalHours(user, project, from, to){
    var filtered_data = this.filterService.filterScrum(user, project, from, to, this.scrums_bydate)
    return filtered_data.map(scrum => scrum.hours).reduce((x,y) => (+x)+(+y), 0)
  }

  getScrum(keyword){
    this.filtered_scrum = this.searchService.searchScrums(keyword, this.scrums_bydate)
  }

  // hasIssues(scrum){
  //   var pending = scrum.issue_logs.filter(issue =>{
  //                      return issue.status == 'Pending'
  //                 })
  //   var resolved = scrum.issue_logs.filter(issue =>{
  //                      return issue.status == 'Resolved'
  //                 })
  //   var closed = scrum.issue_logs.filter(issue =>{
  //                      return issue.status == 'Closed'
  //                 })
  //   return (this.filter_pending && pending.length!=0) ||
  //           (this.filter_resolved && resolved.length!=0) ||
  //           (this.filter_closed && closed.length!=0)
  // }

  hasPending(scrum){
    var pending = scrum.issue_logs.filter(issue => {
                       return issue.status == 'P'
                  })
    return (pending.length!=0)
  }

  goToIssues(){
    this.stateService.go('issuesboard');
  }


  formatDateToPython(to_format_date: Date){
    // replacing all '/' occurence with '-' occurence which is acceptable in a url
    const year: number = to_format_date.getFullYear();
    const month: number = to_format_date.getMonth() + 1;
    const day: number = to_format_date.getDate();
    return year + '-' + month + '-' + day
  }

  producePDFReport(){
    // Producing pdf report

    // * means that all users will be filtered
    let filter_user = "*";
    if(this.filter_user){
      filter_user = this.filter_user;
    }
    let filter_project = "*";
    if(this.filter_project){
      filter_project = this.filter_project
    }

    const filter_from = this.formatDateToPython(this.filter_from);
    const filter_to = this.formatDateToPython(this.filter_to);


    // Vanilla javascript so I can access the django template outside
    //   the angular scope
    window.location.href = OVERALL_RESULTS(
      filter_project, filter_user, filter_from, filter_to);
  }
}
