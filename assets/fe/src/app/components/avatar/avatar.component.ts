import * as colorGen from 'string-to-color';
import { Component, OnInit, Input } from '@angular/core';
import { ScrumDataService } from '../../services/scrum-data.service';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

  @Input() id
  @Input() username

  constructor(
      private scrumDataService: ScrumDataService,
  ) { }

  ngOnInit() {
      
  }

  getColor(id: string){
      if(!id){
          id = 'blue'
      }
      return colorGen(id)
  }

  getUsername(username: string){
      if(!username){
          return 'CS'
      }
      // try{
      if( username.indexOf('.') == -1){
          return username.charAt(0).toUpperCase() + 
                  username.charAt(1).toUpperCase()
        }
      var avatar_name = username.split('.');
      
      return avatar_name[0].charAt(0).toUpperCase() + 
              avatar_name[1].charAt(0).toUpperCase()
  }
}
