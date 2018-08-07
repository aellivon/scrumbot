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

issues_status = IssuesAPI.as_view({
    'post': 'update_status'
})

issues_deadline = IssuesAPI.as_view({
    'post': 'update_deadline'
})

app_name = 'logs'
urlpatterns = [
    path('', scrum_list, name='list_scrum'),
    path('update/', scrum_update, name='update_scrum'),
    path('issues/', issues_list, name='list_issues'),
    path('update_status/<str:issue_id>', issues_status, name='update_status'),
    path('update_deadline/<str:issue_id>', issues_deadline, name='update_deadline')
]
