from django.shortcuts import render, redirect
from django.http import HttpResponse

def default(request):
    return HttpResponse("Hello, Django!")

def landing(request):
    return render(request, 'website/index.html')
    # return HttpResponse("Hello, Landing!")       



