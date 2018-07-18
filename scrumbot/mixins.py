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
        # import pdb; pdb.set_trace()
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
        data['response_type'] = "in_channel"
        return data
        

#     def check_issues(self, message):
#         for issue in issues:
#             self._create_issues(issue)
#         return issues

#     def _create_issues(self)
#         pass

# class UserCRUDMixin(object):

#     def add_user(self):
#         return user

#     def create_team(self)
#         return team

#     def check_issues(self, message):
#         for issue in issues:
#             self._create_issues(issue)
#         return issues

#     def _create_issues(self)
#         pass

# class TeamCRUDMixin(object):

#     def add_user(self):
#         return user

#     def create_team(self)
#         return team

#     def check_issues(self, message):
#         for issue in issues:
#             self._create_issues(issue)
#         return issues

#     def _create_issues(self)
#         pass
