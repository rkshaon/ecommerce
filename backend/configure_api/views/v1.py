from rest_framework.views import APIView
from rest_framework.response import Response

from category_api.models import Category
from product_api.models import Product


class AdminSetupView(APIView):
    def get(self, request, *args, **kwargs):
        return Response({
            'categoris': Category.objects.filter(
                is_deleted=False
            ).count(),
            'active_categories': Category.objects.filter(
                is_deleted=False,
                is_active=True
            ).count(),
            'products': Product.objects.filter(
                is_deleted=False
            ).count(),
        })
