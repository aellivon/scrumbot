from django.urls import path
from .views import (OverAllReviewReport, IssueReport)


app_name = 'reports'

urlpatterns = [
    path('overall_report/<str:project>/<str:member>/<str:from_date>/<str:to_date>/',
            OverAllReviewReport.as_view(),name='overall_report'),
    path('issues_report/<str:project>/<str:member>/<str:from_date>/<str:to_date>/<str:ticket_status>',
            IssueReport.as_view(),name='issues_report'),
]