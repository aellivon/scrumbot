from django.db import models
from django.contrib.auth.models import AbstractUser


class Team(models.Model):
    """
    Team model
    """
    id = models.CharField(max_length=100, primary_key=True)
    domain = models.CharField(max_length=100, default='')

    def __str__(self):
        return self.domain
        

class User(AbstractUser):
    """
    User model
    """
    slack_id = models.CharField(max_length=200, unique=True, default='')
    team = models.ManyToManyField('Team')

    def __str__(self):
        return self.username


class Project(models.Model):
    """
    Project model
    """
    id = models.CharField(max_length=100, primary_key=True)
    name = models.CharField(max_length=100, default='')
    team = models.ForeignKey(Team, on_delete=models.CASCADE)


    def __str__(self):
        return self.name
        
