import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScrumDataService {

  constructor() { }
  
  scrum_data: any

  getScrums(){
      return this.scrum_data
  }

  setScrums(scrum_data){
      this.scrum_data = scrum_data
  }

}
