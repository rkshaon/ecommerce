from django.urls import path

from configure_api.views import v1 as v1_view


urlpatterns = [
    path('setup', v1_view.AdminSetupView.as_view()),
]
