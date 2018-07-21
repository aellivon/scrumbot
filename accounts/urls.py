from django.urls import path
from .views import TeamAPI, UserAPI, ProjectAPI

create_team = TeamAPI.as_view({
    'post': 'create'
})

list_users = UserAPI.as_view({
    'get': 'list_by_team'
})

list_projects = ProjectAPI.as_view({
    'get': 'list_by_team'
})

urlpatterns = [
    path('create/', create_team, name='create'),
    path('users/<str:team_id>/', list_users, name='list_users'),
    path('projects/<str:team_id>/', list_projects, name='list_projects'),
]