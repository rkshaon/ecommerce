from rest_framework.viewsets import ViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.decorators import permission_classes, authentication_classes
from rest_framework.authentication import SessionAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework import status
from rest_framework_simplejwt.authentication import JWTAuthentication

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
            queryset = self.queryset.filter(is_active=True, is_featured=True, is_deleted=False)
        else:
            queryset = self.queryset.filter(is_active=True, is_deleted=False)

        serializer = self.serializer_class(queryset, many=True)
        
        data = serializer.data
        
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

        serializer = self.serializer_class(data=request_data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response({
                'status': False,
                'errors': serializer.errors,
            }, status=status.HTTP_400_BAD_REQUEST)


class CategoryView(APIView):    
    serializer_class = CategorySerializer
    
    @authentication_classes([SessionAuthentication, JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def post(self, request, *args, **kwargs):
        print(request.data)
        return Response()
    
    def get(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)

        if pk:
            try:
                data = self.serializer_class(Category.objects.get(pk=pk)).data
                return Response(data)
            except Category.DoesNotExist:
                return Response({
                    'error': 'Category does not exist.'
                }, status=status.HTTP_404_NOT_FOUND)
            
        query = request.GET.get('query', None)

        if query and query.lower() == 'only-parent':
            queryset = Category.objects.filter(
                is_active=True,
                parent=None,
            )
        elif query and query.lower() == 'only-feature':
            queryset = Category.objects.filter(
                is_active=True, is_featured=True, is_deleted=False)
        else:
            queryset = Category.objects.filter(
                is_active=True, is_deleted=False)

        serializer = self.serializer_class(queryset, many=True)

        return Response(serializer.data)

    @authentication_classes([SessionAuthentication, JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def delete(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)

        if not pk:
            return Response({
                'error': 'Category ID is required to delete.'
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            category = Category.objects.get(pk=pk, is_active=True, is_deleted=False)
            category.is_deleted = True
            category.save()
        except Category.DoesNotExist:
            return Response({
                'error': 'Category does not exist.'
            }, status=status.HTTP_404_NOT_FOUND)
        
        return Response({
            'message': 'Successfully deleted.',
        }, status=status.HTTP_202_ACCEPTED)
    

    @authentication_classes([SessionAuthentication, JWTAuthentication])
    @permission_classes([IsAuthenticated])
    def put(self, request, *args, **kwargs):
        pk = kwargs.get('pk', None)

        if not pk:
            return Response({
                'error': 'Category ID is required.',
            }, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            category = Category.objects.get(
                pk=pk, is_active=True, is_deleted=False)
        except Category.DoesNotExist:
            return Response({
                'error': 'Category does not exist.'
            }, status=status.HTTP_404_NOT_FOUND)
        
        serializer = CategorySerializer(category, data=request.data, partial=True)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
