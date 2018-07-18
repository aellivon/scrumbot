import { Component, OnInit } from '@angular/core';
import { StateService } from '@uirouter/angular'

@Component({
  selector: 'app-scrumboard',
  templateUrl: './scrumboard.component.html',
  styleUrls: ['./scrumboard.component.css']
})
export class ScrumboardComponent implements OnInit {

  constructor(
      private stateService: StateService,
  ) { }

  client_id: ''

  ngOnInit() {
      if(!this.client_id){
          this.stateService.go('slack-login')
      }
  }

}
