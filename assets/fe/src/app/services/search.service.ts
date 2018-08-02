import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  searchScrums(keyword, scrums){
      return scrums.filter(scrum => {
        var done_logs = scrum.done_logs.filter(log=>{
                          return log.message.search(new RegExp(keyword, 'i')) >= 0 
                        })
        var wip_logs = scrum.wip_logs.filter(log=>{
                          return log.message.search(new RegExp(keyword, 'i')) >= 0 
                        })
        var issue_logs = scrum.issue_logs.filter(log=>{
                          return log.issue.search(new RegExp(keyword, 'i')) >= 0
                        })
        return scrum.user.search(new RegExp(keyword, 'i')) >= 0 || 
        scrum.project.search(new RegExp(keyword, 'i')) >= 0  ||
        scrum.hours.search(new RegExp(keyword, 'i')) >= 0 ||
        done_logs.length!=0 || wip_logs.length!=0
        || issue_logs.length!=0
      })
  }

  searchIssues(keyword, issues){
      return issues.filter(issue => {
        var scrums = issue.scrum_data.filter(scrum=>{
                          return scrum.user_username.search(new RegExp(keyword, 'i')) >= 0 ||
                                  scrum.project_name.search(new RegExp(keyword, 'i')) >= 0 
                        })
        return issue.status.search(new RegExp(keyword, 'i')) >= 0 || 
        issue.issue.search(new RegExp(keyword, 'i')) >= 0  ||
        scrums.length!=0
      })
  }

}
