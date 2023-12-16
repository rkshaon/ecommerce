from django.urls import path

from product_api import views

urlpatterns = [
    path('', views.ProductViewSet.as_view({
        'get': 'list',
    })),
    path('category/<int:category_id>', views.ProductViewSet.as_view({
        'get': 'products_category_wise',
    })),
]