from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.viewsets import ViewSet
from django.shortcuts import get_object_or_404
from accounts.models import User, Team, Project
from .models import Log, Issue
from accounts.serializers import (
                                UserSerializer,
                                TeamSerializer,
                                ProjectSerializer
                                )
from .serializers import (
                        LogSerializer,
                        IssueSerializer,
                        ScrumSerializer,
                        IssueStatusSerializer
                        )
from scrumbot.mixins import CRUDMixin, ParseMixin
from django.http import QueryDict
import json

class ScrumAPI(APIView, CRUDMixin, ParseMixin):
    """
    Scrum API
    """
    
    def post(self, request, *args, **kwargs):
        """
        adds scrum reports to db
        """
        data = self.parseData(request.POST)

        try:
            Project.objects.get(id=data['channel_id'])
        except Project.DoesNotExist:
            project_data = QueryDict('', mutable=True)
            project_data['id'] = data['channel_id']
            project_data['name'] = data['channel_name']
            self.create(project_data, Project, ProjectSerializer)

        try:
            Team.objects.get(id=data['team_id'])
        except Team.DoesNotExist:
            team_data = QueryDict('', mutable=True)
            team_data['id'] = data['team_id']
            team_data['domain'] = data['team_domain']
            self.create(team_data, Team, TeamSerializer)

        try:
            User.objects.get(slack_id=data['user_id'])
        except User.DoesNotExist:
            user_data = QueryDict('', mutable=True)
            user_data['username'] = data['user_name']
            user_data['team'] = data['team_id']
            user_data['slack_id'] = data['user_id']
            self.create(user_data, User, UserSerializer)

        user = User.objects.get(slack_id=data['user_id'])
        message = self.parseStringData(data)

        log_data = QueryDict('', mutable=True)
        for x in range(4):
            log_data['log_type'] = message[x][0]
            log_data['message'] = message[x][3:]
            log_data['user'] = user.id
            self.create(log_data, Log, LogSerializer)

        issue_data = QueryDict('', mutable=True)
        issue_data['issue'] = message[2][3:]
        issue_data['user'] = user.id
        self.create(issue_data, Issue, IssueSerializer)

        return Response(data=data, status=201)

    def get(self, request, *args, **kwargs):
        """
        lists scrum reports
        """
        return self.list_all(Log, ScrumSerializer)

class IssuesAPI(ViewSet, CRUDMixin):
    """
    Issues API
    """

    def list(self, request, *args, **kwargs):
        """
        lists issue reports
        """
        return self.list_all(Issue, IssueSerializer)

    def update_status(self, request, *args, **kwargs):
        """
        updates an issue's status
        """
        issue_id = self.kwargs.get('issue_id', None)
        issue = get_object_or_404(Issue, id=issue_id)
        return self.update_object(self.request.data, issue.id, IssueStatusSerializer)
        