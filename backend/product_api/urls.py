from django.urls import path

from product_api import views

urlpatterns = [
    path('', views.ProductViewSet.as_view({
        'get': 'list',
    })),
]