from accounts.models import User, Project

from scrum.models import Scrum, Issue, Log

from django.db.models import Sum, Count

from .constants import STATUS_CHOICES


class UsefulFuncitons():
    # This class is for functions that could be used in the future

    def get_query_set_data_or_empty_string(self, QuerySet, index):
        try:
            return QuerySet[index]
        except IndexError:
            return ''

    def extract_hours_and_minutes(self, to_extract):
        # gets minutes from the databsae and extracts the hours and minutes from it
      
        minutes = to_extract % 60
        hours = to_extract / 60

        time = {
            'hours': float(hours),
            'minutes': float(minutes)
        }

        return time


class ProduceReportMixin(UsefulFuncitons):
    # This mix in is for reusable codes for producing reports

    def  format_data(self, scrums, include_logs, filter_status):
        # formatting data so the front end can gracefully place the data


        formatted_data = []
        for scrum in scrums:
            done_logs = {}
            wip_logs = {}
            
            issues = Issue.objects.filter(scrum__id=scrum.id).order_by('status')
            if filter_status != '*':
                issues = issues.filter(status=filter_status)

            if include_logs:
                done_logs = Log.objects.filter(scrum__id=scrum.id, log_type='1')
                wip_logs = Log.objects.filter(scrum__id=scrum.id, log_type='2')

            # gets the higher length between issues or logs
            higher_length = len(issues)

            if include_logs:
                if len(done_logs) > higher_length:
                    higher_length = len(done_logs)

                if len(wip_logs) > higher_length:
                    higher_length = len(wip_logs)

            index = 0
            while index < higher_length:

                to_push_user = scrum.user.username
                to_push_project = scrum.project.name
                to_push_date = scrum.date_created.date()

                done_log_to_push = ''
                wip_log_to_push = ''

                if include_logs:
                    done_log_to_push = self.get_query_set_data_or_empty_string(done_logs, index)
                    wip_log_to_push = self.get_query_set_data_or_empty_string(wip_logs, index)
                
                issue_to_push = self.get_query_set_data_or_empty_string(issues, index)
                # ensures that at least one has a value
                if done_log_to_push or wip_log_to_push or issue_to_push:
                    if issue_to_push:
                        issue_to_push.status = STATUS_CHOICES[issue_to_push.status]
                    object_to_insert =  {'user': to_push_user, 'project': to_push_project, 
                        'date': to_push_date, 'task_done': done_log_to_push,
                        'wip_done': wip_log_to_push, 'issue': issue_to_push}
                    formatted_data.append(object_to_insert)
                
                index += 1

        return formatted_data


    def fetch_data(self, filter_project, filter_user, filter_from_date, filter_until_date):

        # scrum then undergoes a necessary filters
        scrum = Scrum.objects.filter(date_created__lte=filter_until_date,
            date_created__gte=filter_from_date).order_by('user','project','-date_created')

        if filter_user != '*':
            scrum = scrum.filter(user__username=filter_user)
        
        if filter_project != '*':
            scrum = scrum.filter(project__name=filter_project)

        return scrum


    def get_hours_of_projects(self, scrums):

        # Total hours rendered in a project

        project_reports = scrums.values('project').order_by('project').annotate(total_minutes=Sum('minutes'))

        summary_report = []
        object_to_insert = {}

        for report in project_reports:
            project = Project.objects.get(id=report['project'])

            time = self.extract_hours_and_minutes(report['total_minutes'])

            sentence_string = ""

            sentence_string += f"'{project.name}' got a total of {time['hours']:.0f} hour/s"
            if time['minutes'] != 0:
                sentence_string += f" and {time['minutes']:.0f} minute/s"
            sentence_string += '.'

            object_to_insert = {
                'to_display': sentence_string,
            }
            summary_report.append(object_to_insert)

        return summary_report


    def get_hours_of_members(self, scrums):

        # Extracting the hours from the user


        user_reports = scrums.values('user').order_by('user').annotate(total_minutes=Sum('minutes'))
        

        summary_report = []
        object_to_insert = {}

        for report in user_reports:
            user = User.objects.get(id=report['user'])
            sentence_string = ""
            
            time = self.extract_hours_and_minutes(report['total_minutes'])
            # string builder
            sentence_string += f"'{user.username}' worked for a total of {time['hours']:.0f} hour/s"
            if time['minutes'] != 0:
                sentence_string += f" and {time['minutes']:.0f} minute/s"
            sentence_string += '.'

            object_to_insert = {
                'to_display': sentence_string
            }

            summary_report.append(object_to_insert)

        return summary_report


    def get_hours_of_person_per_project(self, scrums):
       
        # Total hours a person rendered in a project

        user_per_project_reports = scrums.values('user','project').order_by('user','project').annotate(total_minutes=Sum('minutes'))

        summary_report = []
        object_to_insert = {}

        for report in user_per_project_reports:
            user = User.objects.get(id=report['user'])
            project = Project.objects.get(id=report['project'])

            sentence_string = ""

            time = self.extract_hours_and_minutes(report['total_minutes'])

            sentence_string = ""

            sentence_string += f"'{user.username}' spent a total of {time['hours']:.0f} hour/s"
            if time['minutes'] != 0:
                sentence_string += f" and {time['minutes']:.0f} minute/s"
            sentence_string += f" on the project '{project.name}'."

            object_to_insert = {
                'to_display': sentence_string
            }

            summary_report.append(object_to_insert)

        return summary_report


    def get_urgent_issue_count(self, scrums):

        # Count issues to report summary
        issues = Issue.objects.filter(scrum__in=scrums
            ).values('scrum__user__username', 'status'
            ).order_by('scrum__user', 'status'
            ).annotate(total=Count('status'))
        
        for issue in issues:
            issue['status'] = STATUS_CHOICES[issue['status']]

        return issues

    def summary_report(self, scrums):

        # This gets all summary of the project

        members = self.get_hours_of_members(scrums)
        projects = self.get_hours_of_projects(scrums)
        person_per_project = self.get_hours_of_person_per_project(scrums)

        full_summary_report = {
            'members': members,
            'projects': projects,
            'person_per_project': person_per_project
        }
        
        return full_summary_report


    def issue_summary_report(self, scrums):

        # This gets all the summary of issues

        members = self.get_hours_of_members(scrums)
        issues = self.get_urgent_issue_count(scrums)

        full_issue_summary_report = {
            'members': members,
            'issues': issues
        }
        
        return full_issue_summary_report


