import { TEAM_ID } from 'app/constants/config';

export const GET_LOGS = () => '/api/scrum/';
export const GET_ISSUES = () => '/api/scrum/issues/';
export const GET_TEAM_MEMBERS = () => '/api/accounts/users/'+TEAM_ID+'/';
export const GET_TEAM_PROJECTS = () => '/api/accounts/projects/'+TEAM_ID+'/';
export const UPDATE_ISSUE_STATUS = (id) => '/api/scrum/update_status/'+id;
export const UPDATE_ISSUE_DEADLINE = (id) => '/api/scrum/update_deadline/'+id;
export const LOGIN_USER = () => '/api/accounts/login/';
