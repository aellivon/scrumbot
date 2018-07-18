from rest_framework import serializers
from .models import Team, User


class TeamSerializer(serializers.ModelSerializer):
    """Serializer of a team"""

    class Meta:
        model = Team
        fields = ('__all__')


class UserSerializer(serializers.ModelSerializer):
    """Serializer of a user"""

    class Meta:
        model = User
        fields = ['username', 'slack_id', 'team']
