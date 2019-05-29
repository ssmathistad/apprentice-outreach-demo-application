from rest_framework import serializers

from .models import Secret

# Convert Secret model data to Secret object
class SecretSerializer(serializers.ModelSerializer):
    class Meta:
        model = Secret
        fields = ('id')
