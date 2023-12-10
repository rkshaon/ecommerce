from django.urls import path

from category_api import views



urlpatterns = [
    path('', views.CategoryViewSet.as_view({
        'get': 'list'
    })),
    path('<int:category_id>', views.CategoryViewSet.as_view({
        'get': 'details',
    })),
]