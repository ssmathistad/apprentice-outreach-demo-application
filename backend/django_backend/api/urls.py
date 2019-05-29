from django.urls import path, include
from rest_framework import routers

from .api import SecretViewSet

router = routers.DefaultRouter()
router.register('api/secret', SecretViewSet, base_name='secret')

urlpatterns = [
    path("", include(router.urls)),
]
