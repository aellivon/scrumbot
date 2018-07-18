from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import User, Team
from .models import Log, Issue
from accounts.serializers import UserSerializer, TeamSerializer
from .serializers import LogSerializer, IssueSerializer
from scrumbot.mixins import CRUDMixin, ParseMixin
from django.http import QueryDict
import json

class ScrumAPI(APIView, CRUDMixin, ParseMixin):
    """
    Scrum API
    """
    
    def post(self, request, *args, **kwargs):
        # data = self.parsePayload(request.data['payload'])
        # # import pdb; pdb.set_trace()
        data = self.parseData(request.POST)

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
