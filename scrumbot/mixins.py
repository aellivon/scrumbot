from rest_framework.response import Response
from accounts.models import User, Team
from scrum.models import Log
from django.http import QueryDict
import json

class CRUDMixin(object):
    """
    Mixin with CRUD functions
    """

    def create(self, passed_data, passed_model, passed_serializer):
        serializer = passed_serializer(data=passed_data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=201)
        return Response(serializer.errors, status=400)


class ParseMixin(object):
    """
    Mixin with parse functions
    """

    def parseData(self, data):
        data = data.copy()
        return data
        
    def parseStringData(self, data):
        message = data['text']
        return message.split('\r\n')
