# Generated by Django 2.0.7 on 2018-08-08 22:01

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('scrum', '0003_auto_20180809_0600'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scrum',
            name='date_created',
            field=models.DateTimeField(default=datetime.datetime(2018, 8, 8, 22, 1, 42, 253507, tzinfo=utc)),
        ),
    ]
