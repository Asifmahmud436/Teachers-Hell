from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from django.contrib.auth import authenticate
from .serializers import StudentRegistrationSerializer, StudentLoginSerializer
from rest_framework.authtoken.models import Token
from rest_framework.permissions import AllowAny
from .models import Student
from .serializers import StudentSerializer
from rest_framework import viewsets 

class StudentViewSet(viewsets.ModelViewSet):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

# Registration View
class StudentRegisterView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = StudentRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {"message": "Student registered successfully!"},
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# Login View
class StudentLoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = StudentLoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.validated_data['username']
            password = serializer.validated_data['password']
            user = authenticate(request, username=username, password=password)

            if user:
                token, _ = Token.objects.get_or_create(user=user)
                return Response({"token": token.key}, status=status.HTTP_200_OK)
            return Response({"error": "Invalid Credentials"}, status=status.HTTP_401_UNAUTHORIZED)

        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
