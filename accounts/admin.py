from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User, Team, Project

class UserAdmin(BaseUserAdmin):
    fieldsets = (
        (None, {'fields': ('username', 'password', 'slack_id', 'team')}),
    )
        

admin.site.register(User, UserAdmin)
admin.site.register(Team)
admin.site.register(Project)
