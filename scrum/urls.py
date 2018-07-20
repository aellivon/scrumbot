from django.urls import path
from .views import ScrumAPI, IssuesAPI

issues_list = IssuesAPI.as_view({
    'get': 'list'
})

issues_detail = IssuesAPI.as_view({
    'post': 'update_status'
})

app_name = 'logs'
urlpatterns = [
	path('', ScrumAPI.as_view(), name='list_scrum'),
    path('issues/', issues_list, name='list_issues'),
    path('update_status/<str:issue_id>', issues_detail, name='update_status')
]
