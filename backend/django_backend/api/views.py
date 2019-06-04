from django.http import JsonResponse

import hashlib

def secret(request):

    secret = request.GET.get('input', '')
    secret = secret.encode(encoding='UTF-8', errors='strict')
    for i in range(5):
        secret = hashlib.md5(secret)

    json = {"secret": secret}
    return JsonResponse(json)

