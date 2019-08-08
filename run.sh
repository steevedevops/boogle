#!/bin/bash
case $1 in
  dev)
    python manage.py runserver --settings=boggle.settings.dev
    ;;
  prod)
  	python manage.py collectstatic --noinput
    python manage.py makemigrations
    python manage.py migrate
    python manage.py runserver --settings=boggle.settings.prod
    ;;
esac