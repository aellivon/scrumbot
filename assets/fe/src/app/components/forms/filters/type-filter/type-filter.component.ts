import { Component, OnInit } from '@angular/core';
import { FilterService } from '../../../../services/filter.service'

@Component({
  selector: 'app-type-filter',
  templateUrl: './type-filter.component.html',
  styleUrls: ['./type-filter.component.css']
})
export class TypeFilterComponent implements OnInit {

  constructor(
      private filterService: FilterService,
  ) { }

  ngOnInit() {
  }

  setFilter(type){
      // this.filterService.filterByType(type.value)
  }

}
