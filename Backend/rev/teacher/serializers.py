from rest_framework import serializers
from teacher.models import Faculty, Review

class FacultySerializer(serializers.ModelSerializer):
    class Meta:
        model = Faculty
        fields = ['id', 'name', 'designation', 'department', 'profile_picture_url']
        
class ReviewSerializer(serializers.ModelSerializer):
    faculty_name = serializers.CharField(source='faculty.name', read_only=True)

    class Meta:
        model = Review
        fields = ['faculty', 'faculty_name', 'rating', 'review_text']

    def validate_rating(self, value):
        if value < 1 or value > 5:
            raise serializers.ValidationError("Rating must be between 1 and 5.")
        return value