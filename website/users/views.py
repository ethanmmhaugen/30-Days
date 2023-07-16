from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def homepage(request):
    # return render(request, "../../templates/main/temp-designs/homePage/index.html")
    return render(request, 'users/index.html', 'users/stye.css')
    # return HttpResponse("This is the homepage!")