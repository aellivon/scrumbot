from rest_framework.response import Response
from rest_framework.viewsets import ViewSet
from django.shortcuts import render
from .serializers import TeamSerializer, UserSerializer
from .models import User

class TeamAPI(ViewSet):
    """
    Slack team API
    """
    serializer_class = TeamSerializer
    
    def create(self, *args, **kwargs):
        """
        Creates a team
        """
        serializer = self.serializer_class(data=self.request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        return Response(serializer.errors, status=400)


class UserAPI(ViewSet):
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
        serializer = self.serializer_class(users, many=True)
        return Response(serializer.data, status=200)
