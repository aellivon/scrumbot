import { ContentOnly } from 'app/utils/layouts.utils'
import { CreateTeamComponent } from 'app/components/forms/create-team/create-team.component'
import { JoinTeamComponent } from 'app/components/prompts/join-team/join-team.component'
import { SlackLoginComponent } from 'app/components/prompts/slack-login/slack-login.component'
import { ScrumboardComponent } from 'app/components/containers/scrumboard/scrumboard.component'
import { IssueboardComponent } from 'app/components/containers/issueboard/issueboard.component'
import { LoginComponent } from 'app/components/forms/login/login.component'

// let CREATE_TEAM_STATE: Object[] = [
//     {
//         name: 'create-team',
//         url: '/create',
//         views: ContentOnly(CreateTeamComponent),
//     }
// ]

// let JOIN_TEAM_STATE: Object[] = [
//     {
//         name: 'join-team',
//         url: '/join',
//         views: ContentOnly(JoinTeamComponent),
//     }
// ]

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
	otherwise: '/',
	states: [].concat(
        HOME_STATE,
        ISSUES_STATE,
        LOGIN_STATE
	)
}