from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.pagination import PageNumberPagination
from teacher.models import Review, Faculty
from teacher.serializers import ReviewSerializer , FacultySerializer
from django.db.models import Avg  

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
        
class ReviewCreateView(APIView):
    def post(self, request, *args, **kwargs):
        # Extract the faculty ID from the request data
        faculty_id = request.data.get('faculty')
        faculty = Faculty.objects.filter(id=faculty_id).first()

        if not faculty:
            return Response({"detail": "Faculty not found."}, status=status.HTTP_404_NOT_FOUND)

        # Serialize the review data
        serializer = ReviewSerializer(data=request.data)
        if serializer.is_valid():
            # Save the review
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class FacultyAverageRatingView(APIView):
    def get(self, request, *args, **kwargs):
        faculty_id = request.query_params.get('faculty_id')
        
        if not faculty_id:
            return Response({"detail": "Faculty ID is required."}, status=status.HTTP_400_BAD_REQUEST)

      
        faculty = Faculty.objects.filter(id=faculty_id).first()

        if not faculty:
            return Response({"detail": "Faculty not found."}, status=status.HTTP_404_NOT_FOUND)

        reviews = Review.objects.filter(faculty=faculty)

        if reviews.count() == 0:
            return Response({"detail": "No reviews available for this faculty."}, status=status.HTTP_404_NOT_FOUND)


        average_rating = reviews.aggregate(Avg('rating'))['rating__avg']

      
        return Response({"faculty_id": faculty_id, "average_rating": average_rating}, status=status.HTTP_200_OK)

class ReviewListView(APIView):
    def get(self, request, *args, **kwargs):
        faculty_id = request.query_params.get('faculty_id')

        if faculty_id:
            faculty = Faculty.objects.filter(id=faculty_id).first()
            if not faculty:
                return Response({"detail": "Faculty not found."}, status=status.HTTP_404_NOT_FOUND)
            reviews = Review.objects.filter(faculty=faculty)
        else:
            reviews = Review.objects.all()

        serializer = ReviewSerializer(reviews, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
