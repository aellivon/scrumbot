from rest_framework import serializers
from .models import Log, Issue

class LogSerializer(serializers.ModelSerializer):
    """Serializer of a log model"""

    class Meta:
        model = Log
        fields = ('__all__')

class ScrumSerializer(serializers.ModelSerializer):
    """Serializer of a log model"""
    log_type = serializers.CharField(source='get_log_type_display')
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Log
        fields = ('__all__')

class IssueSerializer(serializers.ModelSerializer):
    """Serializer of an issue model"""
    status = serializers.CharField(source='get_status_display')
    user = serializers.CharField(source='user.username')

    class Meta:
        model = Issue
        fields = ('__all__')

class IssueStatusSerializer(serializers.ModelSerializer):
    """Serializer of an issue's status"""

    class Meta:
        model = Issue
        fields = ['status']

    def update(self, id):
        issue = Issue.objects.get(id=id)
        issue.status = self.validated_data['status']

        issue.save()
