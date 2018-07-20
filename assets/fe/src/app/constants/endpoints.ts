var team_id = 'TBQPB0RMJ'

export const GET_LOGS = () => '/api/scrum/';
export const GET_ISSUES = () => '/api/scrum/issues/';
export const GET_TEAM_MEMBERS = () => '/api/accounts/'+team_id+'/';
export const UPDATE_ISSUE_STATUS = (id) => '/api/scrum/update_status/'+id;
