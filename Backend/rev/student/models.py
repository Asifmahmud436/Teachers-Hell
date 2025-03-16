from django.db import models

class Student(models.Model):
    GENDER_CHOICES = [
        ('M', 'Male'),
        ('F', 'Female'),
        ('O', 'Other'),
    ]

    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    address = models.TextField(blank=True, null=True)
    phone_number = models.CharField(max_length=15, unique=True)
    enrolled_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.first_name} {self.last_name}"
