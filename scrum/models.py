from django.db import models

from accounts.models import User, Project
from django.contrib.humanize.templatetags.humanize import naturalday
        

class Scrum(models.Model):
    """
    User's scrum report model
    """

    date_created = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    hours = models.FloatField()
    minutes = models.IntegerField()
    is_edited = models.BooleanField(default=False)

    def __str__(self):
        return str(self.id)

    @property
    def humanize_time(self):
        return naturalday(self.date_created)
    
    @property
    def hours(self):
        # Gets the hours to display
        over_minutes = self.minutes % 60
        hours = int((self.minutes-over_minutes) / 60)

        if len(str(over_minutes)) == 1:
            # add padding if it's a  single digit
            over_minutes = "0" + str(over_minutes)

        # Covnert to float so there won't be any conflict on the front end
        float_time = float(f"{hours}.{over_minutes}")
        return float_time


class Log(models.Model):
    """
    User's log model
    """

    LOG_CHOICES = (
        ('1', 'DONE'),
        ('2', 'WIP')
    )
    log_type = models.CharField(max_length=10,
                                choices=LOG_CHOICES,
                                default='')
    message = models.TextField()
    scrum = models.ForeignKey(Scrum, on_delete=models.CASCADE, default='')

    def __str__(self):
        return self.message


class Issue(models.Model):
    """
    User's issue model
    """

    STATUS_CHOICES = (
        ('R', 'Resolved'),
        ('P', 'Pending'),
        ('C', 'Closed')
    )
    status = models.CharField(max_length=20,
                choices=STATUS_CHOICES, default='P')
    issue = models.TextField()
    is_urgent = models.BooleanField(default=False)
    scrum = models.ForeignKey(Scrum, on_delete=models.CASCADE)
    deadline = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.issue
