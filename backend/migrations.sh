#!/bin/bash

# Django default
python manage.py migrate

# User model
python manage.py makemigrations user_api
python manage.py migrate

# Category model
python manage.py makemigrations category_api
python manage.py migrate

# Product model
python manage.py makemigrations product_api
python manage.py migrate
