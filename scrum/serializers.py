from rest_framework import serializers
from .models import Log, Issue, Scrum


class ScrumSerializer(serializers.ModelSerializer):
    """Serializer of a scrum model"""
    user_username = serializers.SerializerMethodField()

    def get_user_username(self, obj):
        return obj.user.username

    class Meta:
        model = Scrum
        fields = ('user', 'project', 'hours', 'date_created', 'user_username')

class LogSerializer(serializers.ModelSerializer):
    """Serializer of a log model"""

    class Meta:
        model = Log
        fields = ('__all__')


class IssueSerializer(serializers.ModelSerializer):
    """Serializer of an issue model"""
    status = serializers.CharField(source='get_status_display', read_only=True)
    scrum_data = serializers.SerializerMethodField()

    def get_scrum_data(self, obj):
        return ScrumSerializer(obj.scrum).data

    class Meta:
        model = Issue
        fields = ('id', 'status', 'issue', 'is_urgent', 'scrum', 'scrum_data')
        

class ScrumReportSerializer(serializers.ModelSerializer):
    """Serializer of a scrum model"""
    user = serializers.CharField(source='user.username')
    project = serializers.CharField(source='project.name')
    done_logs = serializers.SerializerMethodField()
    wip_logs = serializers.SerializerMethodField()
    issue_logs = serializers.SerializerMethodField()

    def get_done_logs(self, obj):
        return LogSerializer(obj.log_set.filter(log_type='1'), many=True).data

    def get_wip_logs(self, obj):
        return LogSerializer(obj.log_set.filter(log_type='2'), many=True).data
    
    def get_issue_logs(self, obj):
        return IssueSerializer(obj.issue_set.all(), many=True).data

    class Meta:
        model = Scrum
        fields = ('id', 'user', 'project', 'hours', 'date_created',
                    'done_logs', 'wip_logs', 'issue_logs')


# class IssueReportSerializer(serializers.ModelSerializer):
#     """Serializer of an issue report model"""

#     class Meta:
#         model = Issue
#         fields = ('__all__')


class IssueStatusSerializer(serializers.ModelSerializer):
    """Serializer of an issue's status"""

    class Meta:
        model = Issue
        fields = ['status']

    def update(self, id):
        issue = Issue.objects.get(id=id)
        issue.status = self.validated_data['status']

        issue.save()
