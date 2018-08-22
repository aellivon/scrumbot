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

  c

  getColor(id: string){
      if(!id){
          id = 'blue'
      }
      const lighten = (color, amount)=> {
         // Removes hashtag in the color generated 
          color = (color.indexOf("#")>=0) ? color.substring(1,color.length) : color;
          // amount to be added for the color change
          amount = ((255*amount)/100);
          amount = parseInt(amount);
         // Split the color into three parts, RGB and combine
         const R = this.addLight(color.substring(0,2),amount);
         const G = this.addLight(color.substring(2,4),amount);
         const B = this.addLight(color.substring(4,6),amount);
         const RGB = '#' + R + G + B;
         return RGB;
      }

      const lighten_generated_color = lighten(colorGen(id), 15);
      return lighten_generated_color;
  }

  addLight = function(color, amount){
    // Parsing the splitted color amount to base 16 and adding amount
    let cc = parseInt(color,16) + amount;
    // Pull down amount that surprass 255
    let c = (cc > 255) ? 255 : (cc);
    // Convert the 255 color value into hex
    c = (c.toString(16).length > 1 ) ? c.toString(16) : `0${c.toString(16)}`;
    return c;
  }

  getUsername(username: string){
      if(!username){
          return 'CS'
      }
      if( username.indexOf('.') == -1){
          return username.charAt(0).toUpperCase() + 
                  username.charAt(1).toUpperCase()
        }
      var avatar_name = username.split('.');
      
      return avatar_name[0].charAt(0).toUpperCase() + 
              avatar_name[1].charAt(0).toUpperCase()
  }
}
