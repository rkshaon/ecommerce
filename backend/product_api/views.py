from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from product_api.models import Product
from product_api.models import ProductImage

from product_api.serializers import ProductSerializer
from product_api.serializers import ProductImageSerializer



class ProductViewSet(ViewSet):
    """ViewSet for managing products."""

    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    actions = {
        'get': 'list',
    }

    def list(self, request):
        """Return a list of products."""
        queryset = self.queryset.filter(is_active=True)

        serializer = self.serializer_class(queryset, many=True)
        
        data = {
            'status': True,
            'data': serializer.data,
        }
        
        return Response(data)