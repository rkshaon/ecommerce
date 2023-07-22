from django.urls import path

from category_api import views



urlpatterns = [
    path('', views.CategoryViewSet.as_view({
        'get': 'list'
    })),
]