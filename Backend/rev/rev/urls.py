from django.contrib import admin
from django.urls import path
from django.urls import path, include 
urlpatterns = [
    path('admin', admin.site.urls),
    path('api/student', include('student.urls')),
    path('api/faculty/', include('teacher.urls')),  # Add trailing slash here

]
