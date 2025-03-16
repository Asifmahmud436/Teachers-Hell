from django.urls import path
from .views import StudentRegisterView, StudentLoginView

urlpatterns = [
    path('register/', StudentRegisterView.as_view(), name='student_register'),
    path('login/', StudentLoginView.as_view(), name='student_login'),
]
