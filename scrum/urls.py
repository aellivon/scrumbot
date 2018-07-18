from django.urls import path
from .views import ScrumAPI

app_name = 'logs'
urlpatterns = [
	path('', ScrumAPI.as_view(), name='list')
]
