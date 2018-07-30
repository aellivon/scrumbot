import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'app/services/data.service';
import { SearchService } from 'app/services/search.service';
import { GET_ISSUES } from 'app/constants/endpoints';
import { INgxMyDpOptions } from 'ngx-mydatepicker';

@Component({
  selector: 'app-issueboard',
  templateUrl: './issueboard.component.html',
  styleUrls: ['./issueboard.component.scss']
})
export class IssueboardComponent implements OnInit {

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
      private searchService: SearchService,
      private dataService: DataService,
  ) { }

  issues: any
  users: {}
  projects: {}

  filtered_issues: any

  filter_user = ''
  filter_project = ''

  filter_pending: boolean = true;
  filter_resolved: boolean = false;
  filter_closed: boolean = false;
  
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

  ngOnInit() {
      this.fetchIssues()
      this.fetchProjects()
      this.fetchUsers()
  }

  fetchIssues(){
      this.dataService.fetchIssues()
          .subscribe(
              data => {
                  this.issues = data
                  console.log(this.issues)
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

  getIssues(keyword){
    this.filtered_issues = this.searchService.searchIssues(keyword, this.issues)
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

  isWithinDate(scrum_date, filter_from, filter_to){
    return (new Date(scrum_date).setHours(0,0,0,0) >= filter_from.setHours(0,0,0,0) &&
            new Date(scrum_date).setHours(0,0,0,0) <= filter_to.setHours(0,0,0,0))
  }

}
