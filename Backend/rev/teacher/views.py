from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from teacher.models import Faculty
from teacher.serializers import FacultySerializer

class FacultyPagination(PageNumberPagination):
    page_size = 10  # The number of items per page 

class FacultyListView(APIView):
    def get(self, request, *args, **kwargs):
        search_query = request.query_params.get('search', '')
        
        # Filter faculties based on search query
        if search_query:
            faculties = Faculty.objects.filter(name__icontains=search_query)
        else:
            faculties = Faculty.objects.all()

        # Apply pagination
        paginator = FacultyPagination()
        paginated_faculties = paginator.paginate_queryset(faculties, request)
        
        # Serialize the paginated faculty data
        serializer = FacultySerializer(paginated_faculties, many=True)

        # Return the paginated response
        return paginator.get_paginated_response(serializer.data)
