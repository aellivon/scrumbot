import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilterService {

  constructor() { }

  log_type = ''

  filterScrum(username, project, from, to, scrums){
      return scrums.filter(scrum => {
        var date = new Date(scrum.date_created)
        date.setHours(0,0,0,0)
        return scrum.user.includes(username) && 
        scrum.project.includes(project) && 
        (date >= from && date <= to)
      })
  }

  filterScrumSearch(keyword, scrums){
      return scrums.filter(scrum => {
        var date = new Date(scrum.date_created)
        date.setHours(0,0,0,0)
        var done_logs = scrum.done_logs.filter(log=>{
                          return log.message.search(new RegExp(keyword, 'i')) >= 0 
                        })
        var wip_logs = scrum.wip_logs.filter(log=>{
                          return log.message.search(new RegExp(keyword, 'i')) >= 0 
                        })
        var issue_logs = scrum.issue_logs.filter(log=>{
                          return log.issue.search(new RegExp(keyword, 'i')) >= 0  ||
                          log.status.search(new RegExp(keyword, 'i')) >= 0 
                        })
        return scrum.user.search(new RegExp(keyword, 'i')) >= 0 || 
        scrum.project.search(new RegExp(keyword, 'i')) >= 0  ||
        done_logs.length!=0 || wip_logs.length!=0 ||
        issue_logs.length!=0
      })
  }

  filterIssues(status, dateFilterForm, username, project, issues){
      if (status === 'ALL') {
        status = ''
      }

      if (username === 'ALL') {
        username = ''
      }

      if (project === 'ALL') {
        project = ''
      }

      var from = new Date(dateFilterForm.from.date.month + "/" + dateFilterForm.from.date.day + "/" + dateFilterForm.from.date.year)
      var to = new Date(dateFilterForm.to.date.month + "/" + dateFilterForm.to.date.day + "/" + dateFilterForm.to.date.year)

      return issues.filter(issue => {
        var date = new Date(issue.date_created)
        date.setHours(0,0,0,0)
        return issue.status.includes(status) &&
        issue.user.includes(username) && 
        issue.project.includes(project) && 
        (date >= from && date <= to)
      })
  }

  filterById(id, issues){
      return issues.findIndex(issue => {
        return issue.id == id
      })
  }

  filterPending(issues){
      return issues.find(issue => {
         issue.status == "Pending"
      })
  }

}
