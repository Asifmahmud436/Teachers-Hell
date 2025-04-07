<<<<<<< HEAD
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from teacher.models import Faculty
from teacher.serializers import FacultySerializer

class FacultyListView(APIView):
    def get(self, request, *args, **kwargs):
        # Fetch all faculty members from the database
        faculties = Faculty.objects.all()
        
        # Serialize the data
        serializer = FacultySerializer(faculties, many=True)
        
        # Return the serialized data as a JSON response
        return Response(serializer.data, status=status.HTTP_200_OK)
=======
from django.shortcuts import render

# Create your views here.
>>>>>>> 34d61ef8b121b2c0aa995e07ba4947bac72f131d
