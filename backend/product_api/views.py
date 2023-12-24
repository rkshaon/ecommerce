from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics

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
        """
        Return a list of products.
        """

        queryset = self.queryset.filter(is_active=True)

        serializer = self.serializer_class(queryset, many=True)
        
        data = {
            'status': True,
            'data': serializer.data,
        }
        
        return Response(data)


    def get(self, request, product_id):
        """
        Return a single product details.
        """
        product = Product.objects.get(id=product_id)
        product_serializer = ProductSerializer(product, many=False)

        data = {
            'status': True,
            'data': product_serializer.data,
        }

        return Response(data)
    

    def products_category_wise(self, request, category_id):
        """
        Return a list of products based on Category.
        """

        products = Product.objects.filter(category__id=category_id)
        product_serializer = ProductSerializer(products, many=True)

        data = {
            'status': True,
            'data': product_serializer.data,
        }
        
        return Response(data)

# views.py


class RelatedProductList(generics.ListAPIView):
    # Update this based on your serializer structure
    serializer_class = ProductSerializer

    def get_queryset(self):
        product_id = self.kwargs['product_id']

        # Get the category of the given product
        product_category = Product.objects.get(id=product_id).category_id

        # Get the top 5 products from the same category
        related_products = Product.objects.filter(
            category=product_category, is_active=True, is_deleted=False).exclude(id=product_id)[:5]

        return related_products
