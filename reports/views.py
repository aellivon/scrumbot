from django.views.generic import View
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from django.template import Context

from xhtml2pdf import pisa

from scrum.models import Scrum

from datetime import datetime

from accounts.mixins import JwtViewLoginRequiredMixIn

from .mixins import ProduceReportMixin

class OverAllReviewReport(JwtViewLoginRequiredMixIn, View, ProduceReportMixin):
    # Generating the report for the overall report


    def get(self, *args, **kwargs):
        # Setting up the neccessary filter values
        filter_project = self.kwargs.get('project')
        filter_user = self.kwargs.get('member')
        filter_from_date = datetime.strptime(self.kwargs.get('from_date'), '%Y-%m-%d')
        filter_until_date = datetime.strptime(self.kwargs.get('to_date'), '%Y-%m-%d')

        
        # fetching an setting up necessary data
        data = self.fetch_data(filter_project, filter_user, filter_from_date, filter_until_date)

        summary_report = self.summary_report(data)

        data = self.format_data(data, True, '*')

        # For the title of the report

        if filter_project == '*':
            filter_project = "All projects"

        if filter_user == '*':
            filter_user = "everyone"

        # setting up context data
        filters = {
            'project': filter_project,
            'user': filter_user,
            'from_date': filter_from_date.date(),
            'until_date': filter_until_date.date()
        }


        context = {'data': data, 'filters': filters, 'display_type': 'overall',
          'member_reports': summary_report['members'], 'project_reports': summary_report['projects'],
          'person_per_project_report': summary_report['person_per_project']
         }

        template = get_template('pdf_format.html')

        # rendering of template
        html  = template.render(context)
        file = open('buffer.pdf', "w+b")

        # Convert to html to PDF
        pisaStatus = pisa.CreatePDF(html.encode('utf-8'), dest=file,
                encoding='utf-8')
        file.seek(0)
        pdf = file.read()

        # closing file reader
        file.close()
        response = HttpResponse(pdf, content_type='application/pdf')

        # response = HttpResponse(html)
        # #   this is the headers that will let the response know that this file must
        #   must be downloaded once the linked is accessed
        file_name = f"{filters['project']} by {filters['user']} from {filter_from_date.date()} until {filter_until_date.date()}"
        response['Content-Disposition'] = f'attachment; filename="{file_name}.pdf"'
        # Deletes the token that was passed since we don't need it
        response.delete_cookie('token')
        return response


class IssueReport(JwtViewLoginRequiredMixIn, View, ProduceReportMixin):
    # Generating the report for the issue report

    def get(self, *args, **kwargs):

        # Setting up the neccessary filter values
        filter_project = self.kwargs.get('project')
        filter_user = self.kwargs.get('member')
        filter_from_date = datetime.strptime(self.kwargs.get('from_date'), '%Y-%m-%d')
        filter_until_date = datetime.strptime(self.kwargs.get('to_date'), '%Y-%m-%d')
        filter_status = self.kwargs.get('ticket_status')

        # fetching an setting up necessary data
        data = self.fetch_data(filter_project, filter_user, filter_from_date, filter_until_date)

        summary_report = self.issue_summary_report(data)

        data = self.format_data(data, False, filter_status)

        # For the title of the report

        if filter_project == '*':
            filter_project = "All issues"

        if filter_user == '*':
            filter_user = "everyone"

        # setting up context data
        filters = {
            'project': filter_project,
            'user': filter_user,
            'from_date': filter_from_date.date(),
            'until_date': filter_until_date.date()
        }

        context = {'data': data, 'filters': filters, 'display_type': 'issues',
            'member_reports': summary_report['members'], 'issues': summary_report['issues']
        }
        template = get_template('pdf_format.html')

        # rendering of template
        html  = template.render(context)
        file = open('buffer.pdf', "w+b")

        # Convert to html to PDF
        pisaStatus = pisa.CreatePDF(html.encode('utf-8'), dest=file,
                encoding='utf-8')
        file.seek(0)
        pdf = file.read()

        # closing file reader
        file.close()
        response = HttpResponse(pdf, content_type='application/pdf')
        # #   this is the headers that will let the response know that this file must
        #   must be downloaded once the linked is accessed
        file_name = f"{filters['project']} by {filters['user']} from {filter_from_date.date()} until {filter_until_date.date()}"
        response['Content-Disposition'] = f'attachment; filename="{file_name}.pdf"'
         # Deletes the token that was passed since we don't need it after
        response.delete_cookie('token')
        return response


