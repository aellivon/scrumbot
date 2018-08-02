var team_id = 'TBQPB0RMJ'

export const GET_LOGS = () => '/api/scrum/';
export const GET_ISSUES = () => '/api/scrum/issues/';
export const GET_TEAM_MEMBERS = () => '/api/accounts/users/'+team_id+'/';
export const GET_TEAM_PROJECTS = () => '/api/accounts/projects/'+team_id+'/';
export const UPDATE_ISSUE_STATUS = (id) => '/api/scrum/update_status/'+id;
export const UPDATE_ISSUE_DEADLINE = (id) => '/api/scrum/update_deadline/'+id;
