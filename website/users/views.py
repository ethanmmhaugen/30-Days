from django.shortcuts import render, redirect
from django.http import HttpResponse

# Create your views here.
def landing(request):
    return render(request, 'website/index.html')
    # return HttpResponse("Hello, Landing!")   

def login(request):
    return render(request, 'user/login_index.html')

def signup(request):
    return render(request, 'user/signup_index.html')

def welcome(request):
    if request.user.is_authenticated:
        return redirect('user_landing')
    else:
        return render(request, 'user/login_index.html')