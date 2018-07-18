from rest_framework import serializers
from .models import Log, Issue

class LogSerializer(serializers.ModelSerializer):
    """Serializer of a log model"""

    class Meta:
        model = Log
        fields = ('__all__')

class IssueSerializer(serializers.ModelSerializer):
    """Serializer of an issue model"""

    class Meta:
        model = Issue
        fields = ('__all__')
