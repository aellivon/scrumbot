import * as colorGen from 'string-to-color';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.scss']
})
export class MarkerComponent implements OnInit {

  @Input() project

  constructor() { }

  ngOnInit() {
  }

  getColor(project: string){
      if(!project){
          project = 'light-green'
      }
      return colorGen(project)
  }
}
