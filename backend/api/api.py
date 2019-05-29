from rest_framework import viewsets, permissions, generics
from rest_framework.response import Response

from .serializers import (SecretSerializer)

"""
Authenticated users can retrieve all of their stored podcasts
"""
class SecretViewSet(viewsets.ModelViewSet):
    # Define serializer
    serializer_class = SecretSerializer

    # On GET, return all user's podcasts
    def get_queryset(self):
        return self.request.secrets.all()
