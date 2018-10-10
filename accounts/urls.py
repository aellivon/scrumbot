from django.urls import path
from .views import UserAPI, ProjectAPI
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token



login = UserAPI.as_view({
    'post': 'login'
})

logout = UserAPI.as_view({
    'get': 'logout'
})

list_users = UserAPI.as_view({
    'get': 'list'
})

list_projects = ProjectAPI.as_view({
    'get': 'list'
})

urlpatterns = [
    path('users/', list_users, name='list_users'),
    path('projects/', list_projects, name='list_projects'),
    path('login/', obtain_jwt_token, name="login"),
    path('refresh/', refresh_jwt_token, name="token_refresh"),
    path('users/<str:team_id>/', list_users, name='list_users'),
    path('projects/<str:team_id>/', list_projects, name='list_projects')
]