from django.db import models
from accounts.models import User

class Log(models.Model):
    """
    User's log model
    """

    LOG_CHOICES = (
        ('1', 'DONE'),
        ('2', 'WIP'),
        ('3', 'ISSUES'),
        ('4', 'HOURS')
    )
    log_type = models.CharField(max_length=10, choices=LOG_CHOICES)
    message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

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
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.issue
