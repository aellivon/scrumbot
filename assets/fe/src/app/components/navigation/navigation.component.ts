import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { SearchService } from 'app/services/search.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { StateService } from '@uirouter/angular';

import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(
    private authService: AuthenticationService,
    private searchService: SearchService,
    private stateService: StateService,
  ) { }

  logged_user;

   @Input() current_page: string;
   @Output() searchEvent = new EventEmitter<string>();

  icons = {
    search: faSearch
  }

  ngOnInit() {
    this.logged_user = this.authService.authenticate()
  }

  goToDashboard(){
    this.stateService.go('scrumboard');
  }

   goToIssues(){
    this.stateService.go('issuesboard');
  }

  searchSetter(keyword){
    this.searchEvent.emit(keyword);
  }

  logOut(){
   this.stateService.go('logout'); 
  }
}
