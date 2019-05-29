from django.contrib.auth.models import User
from django.db import models

# Secret model for storing podcast data
class Secret(models.Model):
    title = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
