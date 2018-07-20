from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from django.shortcuts import render
from .serializers import TeamSerializer, UserSerializer
from .models import User, Team
from scrumbot.mixins import CRUDMixin

class TeamAPI(ViewSet, CRUDMixin):
    """
    Slack team API
    """
    serializer_class = TeamSerializer
    
    def create(self, *args, **kwargs):
        """
        Creates a team
        """
        self.create(self.request.data, Team, self.serializer_class)


class UserAPI(ViewSet, CRUDMixin):
    """
    Slack user API
    """
    serializer_class = UserSerializer
    
    def list_by_team(self, *args, **kwargs):
        """
        Creates a user
        """
        team_id = self.kwargs.get('team_id', None)
        users = User.objects.filter(team__id=team_id)
        self.list_by(users, self.serializer_class)


class ProjectAPI(ViewSet, CRUDMixin):
    """
    Slack project API
    """
    serializer_class = TeamSerializer
    
    def list_by_team(self, *args, **kwargs):
        """
        Creates a user
        """
        team_id = self.kwargs.get('team_id', None)
        users = User.objects.filter(team__id=team_id)
        self.list_by(users, self.serializer_class)