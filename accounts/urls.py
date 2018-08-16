from django.urls import path
from .views import TeamAPI, UserAPI, ProjectAPI
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token

create_team = TeamAPI.as_view({
    'post': 'create'
})

login = UserAPI.as_view({
    'post': 'login'
})

logout = UserAPI.as_view({
    'get': 'logout'
})

list_users = UserAPI.as_view({
    'get': 'list_by_team'
})

list_projects = ProjectAPI.as_view({
    'get': 'list_by_team'
})

urlpatterns = [
    path('create/', create_team, name='create'),
    path('login/', obtain_jwt_token),
    path('refresh/', refresh_jwt_token),
    path('users/<str:team_id>/', list_users, name='list_users'),
    path('projects/<str:team_id>/', list_projects, name='list_projects'),
]