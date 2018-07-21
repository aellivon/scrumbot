from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from django.shortcuts import render
from .serializers import (TeamSerializer,
                        UserSerializer,
                        ProjectSerializer)
from .models import User, Team, Project
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
        lists users by team
        """
        team_id = self.kwargs.get('team_id', None)
        users = User.objects.filter(team__id=team_id)
        return self.list_by(users, self.serializer_class)


class ProjectAPI(ViewSet, CRUDMixin):
    """
    Slack project API
    """
    serializer_class = ProjectSerializer
    
    def list_by_team(self, *args, **kwargs):
        """
        lists projects by team
        """
        team_id = self.kwargs.get('team_id', None)
        projects = Project.objects.filter(team__id=team_id)
        return self.list_by(projects, self.serializer_class)
