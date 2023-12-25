from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from user_api.serializers import UserSerializer



class UserRegistrationView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            user = serializer.save()
            # Generate an authentication token here (e.g., using DRF's TokenAuthentication or JWT)
            return Response({
                'message': 'User registered successfully',
            })

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)