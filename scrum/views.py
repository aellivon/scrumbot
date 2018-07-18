from rest_framework.response import Response
from rest_framework.views import APIView
from accounts.models import User, Team
from .models import Log
from accounts.serializers import UserSerializer, TeamSerializer
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
            team_create_response = self.create(team_data, Team, TeamSerializer)

        try:
            User.objects.get(slack_id=data['user_id'])
        except User.DoesNotExist:
            user_data = QueryDict('', mutable=True)
            user_data['username'] = data['user_name']
            user_data['team'] = data['team_id']
            user_data['slack_id'] = data['user_id']
            user_create_response = self.create(user_data, User, UserSerializer)

        # try:
        #     Log.objects.get(slack_id=data['user']['id'])
        # except User.DoesNotExist:
        #     user_data = QueryDict('', mutable=True)
        #     user_data['username'] = data['user']['name']
        #     user_data['team'] = data['team']['id']
        #     user_data['slack_id'] = data['user']['id']
        #     user_create_response = self.create(user_data, User, UserSerializer)

        return Response(data=data, status=201)
