import { ContentOnly } from 'app/utils/layouts.utils'
import { ScrumboardComponent } from 'app/components/containers/scrumboard/scrumboard.component'
import { IssueboardComponent } from 'app/components/containers/issueboard/issueboard.component'
import { LoginComponent } from 'app/components/forms/login/login.component'

let HOME_STATE: Object[] = [
    {
        name: 'scrumboard',
        url: '/',
        views: ContentOnly(ScrumboardComponent),
    }
]

let ISSUES_STATE: Object[] = [
    {
        name: 'issuesboard',
        url: '/issues',
        views: ContentOnly(IssueboardComponent),
    }
]

let LOGIN_STATE: Object[] = [
    {
        name: 'login',
        url: '/login',
        views: ContentOnly(LoginComponent),
    }
]

export const APP_STATES = {
	states: [].concat(
        HOME_STATE,
        ISSUES_STATE,
        LOGIN_STATE
	)
}