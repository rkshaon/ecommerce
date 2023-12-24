from django.urls import path

from product_api import views

urlpatterns = [
    path('', views.ProductViewSet.as_view({
        'get': 'list',
    })),
    path('<int:product_id>', views.ProductViewSet.as_view({
        'get': 'get',
    })),
    path('category/<int:category_id>', views.ProductViewSet.as_view({
        'get': 'products_category_wise',
    })),
    path('related-products/<int:product_id>/',
         views.RelatedProductList.as_view(), name='related-products'),
]