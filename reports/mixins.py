
from scrum.models import Scrum, Issue, Log


class UsefulFuncitons():
    # This class is for functions that could be used in the future

    def get_query_set_data_or_empty_string(self, QuerySet, index):
        try:
            return QuerySet[index]
        except IndexError:
            return ''


class ProduceReportMixin(UsefulFuncitons):
    # This mix in is for reusable codes for producing reports

    def  format_data(self, scrums, include_logs):
        # formatting data so the front end can gracefully place the data

        formatted_data = []
        for scrum in scrums:
            done_logs = {}
            wip_logs = {}

            to_push_user = scrum.user.username
            to_push_project = scrum.project.name
            to_push_date = scrum.date_created

            issues = Issue.objects.filter(scrum__id=scrum.id)

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
                done_log_to_push = self.get_query_set_data_or_empty_string(done_logs, index)
                wip_log_to_push = self.get_query_set_data_or_empty_string(wip_logs, index)
                issue_to_push = self.get_query_set_data_or_empty_string(issues, index)

                object_to_insert =  {'user': to_push_user, 'project': to_push_project, 
                    'date': to_push_date, 'task_done': done_log_to_push,
                    'wip_done': wip_log_to_push, 'issue': issue_to_push}

                # erases the recurring data so at a glance the user can know that 
                #   it is recurring data

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