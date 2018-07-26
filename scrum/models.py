from django.db import models
from accounts.models import User, Project


class Scrum(models.Model):
    """
    User's scrum report model
    """

    date_created = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    project = models.ForeignKey(Project, on_delete=models.CASCADE)
    hours = models.CharField(max_length=10)

    def __str__(self):
        return str(self.id)


# class LogManager(models.Manager):
#     """
#     custom Log manager
#     """
    
#     def getDoneLogs(self):
#         return self.filter(log_type='1')

#     def getWIPLogs(self):
#         return self.filter(log_type='2')


class Log(models.Model):
    """
    User's log model
    """

    LOG_CHOICES = (
        ('1', 'DONE'),
        ('2', 'WIP')
    )
    log_type = models.CharField(max_length=10, choices=LOG_CHOICES)
    message = models.TextField()
    scrum = models.ForeignKey(Scrum, on_delete=models.CASCADE)

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
    scrum = models.ForeignKey(Scrum, on_delete=models.CASCADE)

    def __str__(self):
        return self.issue
