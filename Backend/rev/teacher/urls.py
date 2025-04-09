from django.urls import path
from teacher.views import FacultyListView, ReviewCreateView, ReviewListView, FacultyAverageRatingView

urlpatterns = [
    path('', FacultyListView.as_view(), name='faculty-list'),
    path('reviews/', ReviewCreateView.as_view(), name='review-create'),
    path('reviews/list/', ReviewListView.as_view(), name='review-list'),
    path('reviews/average-rating/', FacultyAverageRatingView.as_view(), name='average-rating'),  # For average rating
]
