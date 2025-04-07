from django.db import models

<<<<<<< HEAD
class Faculty(models.Model):
    name = models.CharField(max_length=100)
    profile_picture_url = models.URLField(max_length=300)  # Store image link
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.designation}"
=======
# Create your models here.
>>>>>>> 34d61ef8b121b2c0aa995e07ba4947bac72f131d
