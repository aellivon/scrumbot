from rest_framework import serializers
from .models import Log, Issue, Scrum


class ScrumSerializer(serializers.ModelSerializer):
    """Serializer of a scrum model"""
    user_username = serializers.SerializerMethodField()
    project_name = serializers.SerializerMethodField()

    def get_user_username(self, obj):
        return obj.user.username

    def get_project_name(self, obj):
        return obj.project.name

    class Meta:
        model = Scrum
        fields = ('user', 'project', 'hours',
                'date_created', 'user_username',
                'project_name', 'is_edited')

class LogSerializer(serializers.ModelSerializer):
    """Serializer of a log model"""

    class Meta:
        model = Log
        fields = ('__all__')


class IssueSerializer(serializers.ModelSerializer):
    """Serializer of an issue model"""
    # status = serializers.CharField(source='get_status_display', read_only=True)
    scrum_data = serializers.SerializerMethodField()

    def get_scrum_data(self, obj):
        return ScrumSerializer(obj.scrum).data

    class Meta:
        model = Issue
        fields = ('id', 'status', 'issue', 'is_urgent', 'scrum', 'scrum_data', 'deadline')
        

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
        issues = obj.issue_set.filter(status="P").order_by('is_urgent').reverse()
        return IssueSerializer(issues, many=True).data

    class Meta:
        model = Scrum
        fields = ('id', 'user', 'project', 'hours', 'date_created',
                    'done_logs', 'wip_logs', 'issue_logs', 'is_edited')


class IssueStatusSerializer(serializers.ModelSerializer):
    """Serializer of an issue's status"""

    class Meta:
        model = Issue
        fields = ['status']

    def update(self, id):
        issue = Issue.objects.get(id=id)
        issue.status = self.validated_data['status']

        issue.save()


class IssueDeadlineSerializer(serializers.ModelSerializer):
    """Serializer of an issue's status"""

    class Meta:
        model = Issue
        fields = ['deadline']

    def update(self, id):
        issue = Issue.objects.get(id=id)
        issue.deadline = self.validated_data['deadline']

        issue.save()
