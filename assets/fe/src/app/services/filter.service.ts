import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  log_type = ''

  filterByType(type){
      this.log_type = type;
      console.log(this.log_type)
  }

  filterData(data){
      return data.filter(item => item.log_type === this.log_type);
  }
}
