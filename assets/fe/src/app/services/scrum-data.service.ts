import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GET_LOGS } from 'app/constants/endpoints';

@Injectable({
  providedIn: 'root'
})
export class ScrumDataService {

  constructor(
      private http: HttpClient,
  ) { }
  
  scrum_data: any

  fetchScrums(){
      return this.http.get(GET_LOGS())
  }

  getScrums(){
      return this.scrum_data
  }

  setScrums(scrum_data){
      this.scrum_data = scrum_data
  }

}
