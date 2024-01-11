from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from django.shortcuts import get_object_or_404

import copy

from category_api.models import Category
from product_api.models import Product

from category_api.serializers import CategorySerializer
from product_api.serializers import ProductSerializer



class CategoryViewSet(ViewSet):
    """ViewSet for managing categories."""

    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    
    def list(self, request):
        """Return a list of categories."""
        query = request.GET.get('query', None)
        if query and query.lower() == 'only-parent':
            queryset = self.queryset.filter(
                is_active=True,
                parent=None,
            )
        elif query and query.lower() == 'only-feature':
            queryset = self.queryset.filter(is_active=True, is_featured=True)
        else:
            queryset = self.queryset.filter(is_active=True)

        serializer = self.serializer_class(queryset, many=True)
        
        data = {
            'status': True,
            'data': serializer.data,
        }
        
        return Response(data)
    

    def create(self, request):
        """
        Create a new category.
        """
        if not request.auth:
            return Response({
                'error': 'Authentication credentials were not provided.'
            }, status=status.HTTP_401_UNAUTHORIZED)

        request_data = copy.deepcopy(request.data)
        
        request_data['added_by'] = request.user.id
        print(request_data)
        serializer = self.serializer_class(data=request_data)

        if serializer.is_valid():
            serializer.save()
            return Response({
                'status': True,
                'data': serializer.data,
            }, status=status.HTTP_201_CREATED)
        else:
            return Response({
                'status': False,
                'errors': serializer.errors,
            }, status=status.HTTP_400_BAD_REQUEST)
    

    def details(self, request, category_id):
        data = {
            'status': True,
        }

        category = get_object_or_404(Category, id=category_id)
        category_serializer = CategorySerializer(category, many=False)

        data['data'] = category_serializer.data
        
        return Response(data, status=status.HTTP_200_OK)