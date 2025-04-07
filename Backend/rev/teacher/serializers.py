from rest_framework import serializers
from teacher.models import Faculty

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['id', 'name', 'designation', 'department', 'profile_picture_url']