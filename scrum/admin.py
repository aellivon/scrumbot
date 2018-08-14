from django.contrib import admin
from .models import Log, Issue, Scrum

admin.site.register(Log)
admin.site.register(Issue)

@admin.register(Scrum)
class ScrumAdmin(admin.ModelAdmin):
    readonly_fields = ('date_created',)
