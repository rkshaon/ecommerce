from django.urls import path

from user_api import views


urlpatterns = [
    path('registration', views.UserRegistrationView.as_view(), name='register'),
]