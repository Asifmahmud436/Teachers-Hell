from django.db import models
from textblob import TextBlob

class Faculty(models.Model):
    name = models.CharField(max_length=100)
    profile_picture_url = models.URLField(max_length=300)  # Store image link
    designation = models.CharField(max_length=100)
    department = models.CharField(max_length=100)

    def __str__(self):
        return f"{self.name} - {self.designation}"

class Review(models.Model):
    faculty = models.ForeignKey(Faculty, related_name='reviews', on_delete=models.CASCADE)
    rating = models.PositiveIntegerField()
    review_text = models.TextField()
    sentiment = models.CharField(max_length=20, blank=True, null=True)

    def save(self, *args, **kwargs):
        if self.review_text:
            analysis = TextBlob(self.review_text)
            self.sentiment = 'positive' if analysis.sentiment.polarity > 0 else 'negative' if analysis.sentiment.polarity < 0 else 'neutral'
        super().save(*args, **kwargs)
