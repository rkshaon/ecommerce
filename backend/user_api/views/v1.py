from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.tokens import RefreshToken

# from django.contrib.auth import authenticate

from user_api.models import User

from user_api.serializers import UserSerializer


class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

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
                'errors': [
                    'Please provide either email or username for login.'
                ],
            }, status=status.HTTP_400_BAD_REQUEST)

        try:
            try:
                user = User.objects.get(email=user_credential)
            except Exception as e:
                print(e)
                user = User.objects.get(cell_no=user_credential)
        except Exception as e:
            print(e)
            try:
                user = User.objects.get(username=user_credential)
            except Exception as e:
                print(e)
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
            return Response({
                'detail': 'Invalid credentials.'
            }, status=status.HTTP_401_UNAUTHORIZED)


class RefreshTokenView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        refresh = request.data.get('refresh')

        try:
            # Attempt to verify the refresh token
            token = RefreshToken(refresh)
            # token.blacklist()  # Revoke the old refresh token
            # outstanding_token = OutstandingToken.objects.get(
            # token=str(token))
            # outstanding_token.blacklist()  # Revoke the token

            # Generate a new access token
            new_access_token = token.access_token

            # Return the new access token
            return Response({
                'status': True,
                'data': {
                    'access': str(new_access_token),
                }
            })

        except Exception as e:
            # Handle any errors during token verification
            print(f"Error: {e}")

            return Response({
                'status': False,
                'errors': ['Invalid refresh token'],
            }, status=status.HTTP_401_UNAUTHORIZED)
