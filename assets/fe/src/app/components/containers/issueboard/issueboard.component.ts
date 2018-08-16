import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'app/services/data.service';
import { SearchService } from 'app/services/search.service';
import { AuthenticationService } from 'app/services/authentication.service';
import { GET_ISSUES,
          UPDATE_ISSUE_STATUS,
          UPDATE_ISSUE_DEADLINE, ISSUE_RESULTS } from 'app/constants/endpoints';
import { INgxMyDpOptions } from 'ngx-mydatepicker';
import { StateService } from '@uirouter/angular';
import { faSearch, faAngleDown, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-issueboard',
  templateUrl: './issueboard.component.html',
  styleUrls: ['./issueboard.component.scss']
})
export class IssueboardComponent implements OnInit {

  icons = {
    search: faSearch,
    calendar: faCalendar,
    ellipsis: faEllipsisV,
    angle_down: faAngleDown
  }

  current_page: string = "issues";

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
      private searchService: SearchService,
      private dataService: DataService,
      private stateService: StateService,
      private authService: AuthenticationService,
  ) { }

  issues: any
  users: {}
  projects: {}

  filtered_issues: any

  filter_user = ''
  filter_project = ''

  filter_status = ''
  
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

  logged_user;

  searchSetter(keyword){
    this.getIssues(keyword);
  }

  ngOnInit() {
      this.logged_user = this.authService.authenticate()
      this.fetchIssues()
      this.fetchProjects()
      this.fetchUsers()
  }

  fetchIssues(){
      this.dataService.fetchIssues()
          .subscribe(
              data => {
                this.issues = data
                this.filtered_issues = data
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

  updateStatus(id, status){
      this.http.post(UPDATE_ISSUE_STATUS(id), {"status":status})
      .subscribe();
      var index = this.issues.findIndex(issue => {
         return issue.id == id
      })
      this.issues[index].status = status
  }

  updateDeadline(id, deadline){
      if (deadline){
        this.http.post(UPDATE_ISSUE_DEADLINE(id), {"deadline":deadline})
        .subscribe();
      }
  }

  getIssues(keyword){
    this.filtered_issues = this.searchService.searchIssues(keyword, this.issues)
  }

  getPending(){
    if(!this.issues){
      return null
    }
    return this.issues.filter(issue => {
                       return issue.status == 'P'
                  })
  }

  isWithinDate(issue_date, filter_from, filter_to){
    return (new Date(issue_date).setHours(0,0,0,0) >= filter_from.setHours(0,0,0,0) &&
            new Date(issue_date).setHours(0,0,0,0) <= filter_to.setHours(0,0,0,0))
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
    let filter_status = '*';
    if (this.filter_status){
      filter_status = this.filter_status;
    }
    window.location.href = ISSUE_RESULTS(
      filter_project, filter_user, filter_from, filter_to, filter_status);
  }
}
