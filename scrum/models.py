from django.db import models
from accounts.models import User

class Log(models.Model):
    """
    User's log model
    """

    LOG_CHOICES = (
        ('DONE', '1'),
        ('WIP', '2'),
        ('ISSUES', '3'),
        ('HOURS', '4')
    )
    log_type = models.CharField(max_length=10, choices=LOG_CHOICES)
    message = models.TextField()
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self, arg):
        return self.message
