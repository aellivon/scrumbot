from django.urls import path
from .views import ScrumAPI, IssuesAPI

scrum_list = ScrumAPI.as_view({
    'get': 'list',
    'post': 'create_scrum'
})

scrum_update = ScrumAPI.as_view({
    'post': 'update_scrum'
})

issues_list = IssuesAPI.as_view({
    'get': 'list'
})

issues_detail = IssuesAPI.as_view({
    'post': 'update_status'
})

app_name = 'logs'
urlpatterns = [
	path('', scrum_list, name='list_scrum'),
    path('update/', scrum_update, name='update_scrum'),
    path('issues/', issues_list, name='list_issues'),
    path('update_status/<str:issue_id>', issues_detail, name='update_status')
]
