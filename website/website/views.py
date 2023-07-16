from django.shortcuts import render
from django.http import HttpResponse

def default(request):
    return HttpResponse("Hello, Django!")



# return render(request, 'index.html')