from django.urls import path

from category_api import views


urlpatterns = [
    path('', views.CategoryView.as_view()),
    path('<int:pk>', views.CategoryView.as_view()),
]