from rest_framework.response import Response
from accounts.models import User, Team
from django.http import QueryDict
from django.conf import settings
import json

class CRUDMixin(object):
    """
    Mixin with CRUD functions
    """

    def create(self, passed_data, passed_model, passed_serializer):
        """
        function that accepts: POST data, model, serializer
        creates a model object and adds it to the db
        returns response status
        """
        serializer = passed_serializer(data=passed_data)
        if serializer.is_valid():
            saved_object = serializer.save()
            return saved_object
        return Response(serializer.errors, status=400)

    def list_all(self, passed_model, passed_serializer, sort_column):
        """
        function that accepts: model, serializer
        returns complete list of serialized data of passed model
        """
        model_data = passed_model.objects.all()
        sorted_data = model_data.order_by(sort_column).reverse()
        serializer = passed_serializer(sorted_data, many=True)
        return Response(serializer.data, status=200)

    def list_by(self, passed_data, passed_serializer):
        serializer = passed_serializer(passed_data, many=True)
        return Response(serializer.data, status=200)

    def update_object(self, passed_data, model_id, passed_serializer):
        serializer = passed_serializer(data=passed_data)
        if serializer.is_valid():
            serializer.update(model_id)
            return Response(serializer.data,status=200)
        return Response(status=400)


class ParseMixin(object):
    """
    Mixin with parse functions
    """

    def parseData(self, data):
        data = data.copy()
        return data
        
    def parseStringData(self, data):
        message = data['text']
        return message.split('.')

    def validateData(self, data):
        for idx, log_type in (settings.LOG_TYPES).items():
            try:
                start_index = data['text'].index(str(log_type)+".")+2
                
            except:
                return Response(data="Invalid input format on "+idx+" log")

    # def createParsedLogs(self, data, scrum_id):
    #     none_strings = ['None', 'none', 'N/A', 'n/a', '']
    #     for idx, log_type in (settings.LOG_TYPES).items():
    #         log_data = QueryDict('', mutable=True)
    #         issue_data = QueryDict('', mutable=True)
    #         start_index = data['text'].index(str(log_type)+".")+2
    #         messages = data['text'][start_index:]
    #         last_index = messages.index(str(log_type+1)+".")
    #         messages = messages[:last_index]
    #         splitby_line = messages.split('\r\n')
    #         for y in range(len(splitby_line)):
    #             if (splitby_line[y] in none_strings or
    #                 splitby_line[y][3:] in none_strings):
    #                 continue
    #             if (idx == 'ISSUE'):
    #                 if(splitby_line[y][:3] == '-u '):
    #                     issue_data['is_urgent'] = 'true'
    #                     splitby_line[y] = splitby_line[y][3:]
    #                 issue_data['issue'] = splitby_line[y]
    #                 issue_data['scrum'] = scrum_id
    #                 self.create(issue_data, Issue, IssueSerializer)
    #                 continue
    #             log_data['log_type'] = str(log_type)
    #             log_data['scrum'] = scrum_id
    #             log_data['message'] = splitby_line[y]
    #             self.create(log_data, Log, LogSerializer)
