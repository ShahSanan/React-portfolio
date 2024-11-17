from django.db import models

# Create your models here.
from django.db import models
from django.utils import timezone



class Contact(models.Model):
    name = models.CharField(max_length=255)
    email = models.CharField(max_length=122)
    phone = models.CharField(max_length=20)
    description = models.TextField()
    created_at = models.DateTimeField(default=timezone.now)


    def __str__(self):
        return f"Message from {self.name} - {self.email}"

