from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

from django.contrib.auth import authenticate

from user_api.models import User

from user_api.serializers import UserSerializer



class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()

            return Response({
                'status': True,
                'message': 'User registered successfully',
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        user_credential = request.data.get('user_credential')
        password = request.data.get('password')
        
        if not user_credential:
            return Response({
                'status': False,
                'errors': ['Please provide either email or username for login.'],
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            try:
                user = User.objects.get(email=user_credential)
            except:
                user = User.objects.get(cell_no=user_credential)
        except:
            try:
                user = User.objects.get(username=user_credential)
            except:
                user = None

        if user is None:
            return Response({
                'status': False,
                'errors': ['User not found.'],
            }, status=status.HTTP_404_NOT_FOUND)

        if not user.check_password(password):
            return Response({
                'status': False,
                'errors': ['Password is invalid'],
            }, status=status.HTTP_401_UNAUTHORIZED)
        
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'status': True,
                'data': {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                },                
            })
        else:
            return Response({'detail': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
