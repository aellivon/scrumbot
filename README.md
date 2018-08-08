## Scrumbot
A slackbot for managing daily scrum


## Requirements:
- Django 2.0.7
- Python 3.6.5
- Django Rest Framework 3.8.2

## Installation

Install python 3.6
```
apt-get update
apt-get install python3.6
```
Once it is installed, you can verify the installed version by executing the following command
```
python3 -V
```


Create a virtualenv
```
virtualenv -p python3 venv
```


Install Requirements
```
pip install -r requirements.txt
```


Migrate database
```
./manage.py migrate
```


Create superuser:
```
./manage.py createsuperuser
```


Run app:
```
./manage.py runserver
```


Run unittest:
```
./manage.py test
```

DEVELOPMENT:

Creating your ngrok tunnel for testing your slack app:

1. Download and install ngrok here https://ngrok.com/download
2. After installing run ./ngrok http <port_number> on your terminal to start connecting to the ngrok tunnel.
3. Copy the link given and use it as the <domain_name> for your app's slash commands.
e.g. http://9b39ffec.ngrok.io


Setting up slack slash commands:

Command for creating scrum reports
https://<domain_name>/api/scrum/

Command for updating scrum reports
https://<domain_name>/api/scrum/update/

Setup bot to gain access to private channels:

Generate a legacy token for your slack app here
https://api.slack.com/custom-integrations/legacy-tokens


Setup local_settings.py:

DEBUG = True

ALLOWED_HOSTS = ('*')

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': <database name>,
        'USERNAME': <postgres username>
    }
}

SLACK_API_TOKEN = <your workspace app's token>
