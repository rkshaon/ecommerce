from django.urls import path

from category_api import views



urlpatterns = [
    # path('', views.CategoryViewSet.as_view({
    #     'get': 'list',
    #     'post': 'create',
    # })),
    # path('<int:category_id>', views.CategoryViewSet.as_view({
    #     'get': 'details',
    # })),
    path('', views.CategoryView.as_view()),
    path('<int:pk>', views.CategoryView.as_view()),
]