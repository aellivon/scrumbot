from django.views.generic import View
from django.http import HttpResponse
from django.shortcuts import get_object_or_404
from django.template.loader import get_template
from django.template import Context
from django.contrib.humanize.templatetags.humanize import naturalday

from xhtml2pdf import pisa

from scrum.models import Scrum

from datetime import datetime

from .mixins import ProduceReportMixin 

class OverAllReviewReport(View, ProduceReportMixin):
    # Generating the report for the overall report

    def get(self, *args, **kwargs):

        # Setting up the neccessary filter values
        filter_project = self.kwargs.get('project')
        filter_user = self.kwargs.get('member')
        filter_from_date = datetime.strptime(self.kwargs.get('from_date'), '%Y-%m-%d')
        filter_until_date = datetime.strptime(self.kwargs.get('to_date'), '%Y-%m-%d')
        
        # fetching an setting up necessary data
        data = self.fetch_data(filter_project, filter_user, filter_from_date, filter_until_date)

        data = self.format_data(data, True)

        # For the title of the report

        if filter_project == '*':
            filter_project = "All Projects"

        if filter_user == '*':
            filter_user = "everyone"

        # setting up context data
        filters = {
            'project': filter_project,
            'user': filter_user,
            'from_date': naturalday(filter_from_date),
            'until_date': naturalday(filter_until_date)
        }

        context = {'data': data, 'filters': filters}
        template = get_template('pdf_format.html')

        # rendering of template
        html  = template.render(context)
        file = open('test.pdf', "w+b")

        # Convert to html to PDF
        pisaStatus = pisa.CreatePDF(html.encode('utf-8'), dest=file,
                encoding='utf-8')
        file.seek(0)
        pdf = file.read()

        # closing file reader
        file.close()
        response = HttpResponse(pdf, content_type='application/pdf')

        # DO NOT DELETE. Uncomment this before final push
        #   this is the headers that will let the response know that this file must
        #   must be downloaded once the linked is accessed
        # response['Content-Disposition'] = 'attachment; filename="overall_results.pdf"'

        return response


class IssueReport(View, ProduceReportMixin):
    # Generating the report for the issue report

    def get(self, *args, **kwargs):

        # Setting up the neccessary filter values
        filter_project = self.kwargs.get('project')
        filter_user = self.kwargs.get('member')
        filter_from_date = datetime.strptime(self.kwargs.get('from_date'), '%Y-%m-%d')
        filter_until_date = datetime.strptime(self.kwargs.get('to_date'), '%Y-%m-%d')
        
        # fetching an setting up necessary data
        data = self.fetch_data(filter_project, filter_user, filter_from_date, filter_until_date)

        data = self.format_data(data, True)

        # For the title of the report

        if filter_project == '*':
            filter_project = "All Projects"

        if filter_user == '*':
            filter_user = "everyone"

        # setting up context data
        filters = {
            'project': filter_project,
            'user': filter_user,
            'from_date': naturalday(filter_from_date),
            'until_date': naturalday(filter_until_date)
        }

        context = {'data': data, 'filters': filters}
        template = get_template('pdf_format.html')

        # rendering of template
        html  = template.render(context)
        file = open('test.pdf', "w+b")

        # Convert to html to PDF
        pisaStatus = pisa.CreatePDF(html.encode('utf-8'), dest=file,
                encoding='utf-8')
        file.seek(0)
        pdf = file.read()

        # closing file reader
        file.close()
        response = HttpResponse(pdf, content_type='application/pdf')

        # DO NOT DELETE. Uncomment this before final push
        #   this is the headers that will let the response know that this file must
        #   must be downloaded once the linked is accessed
        # response['Content-Disposition'] = 'attachment; filename="overall_results.pdf"'

        return response


