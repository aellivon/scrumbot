from django.urls import path
from .views import TeamAPI, UserAPI

create_team = TeamAPI.as_view({
    'post': 'create'
})

list_users = UserAPI.as_view({
    'get': 'list_by_team'
})

urlpatterns = [
    path('create/', create_team, name='create'),
    path('<str:team_id>/', list_users, name='list'),
]