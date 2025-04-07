from django.urls import path
from teacher.views import FacultyListView

urlpatterns = [
    path('', FacultyListView.as_view(), name='faculty-list'),
]