from django.db import models

class Faculty(models.Model):
    name = models.CharField(max_length=100)
    profile_picture_url = models.URLField(max_length=300)  # Store image link
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.designation}"
