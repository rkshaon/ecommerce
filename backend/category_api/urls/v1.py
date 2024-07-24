from django.urls import path

from category_api.views import v1 as v1_view


urlpatterns = [
    path('', v1_view.CategoryView.as_view()),
    path('<int:pk>', v1_view.CategoryView.as_view()),
]
