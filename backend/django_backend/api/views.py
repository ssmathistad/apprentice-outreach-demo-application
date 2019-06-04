from django.http import JsonResponse

import hashlib

def secret(request):

    secret = request.GET.get('input', '')
    secret = secret[::-1]
    for i in range(5):
        secret = hashlib.md5(secret.encode(encoding='UTF-8')).hexdigest()

    json = {"secret": secret}
    return JsonResponse(json)

