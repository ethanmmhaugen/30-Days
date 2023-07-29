"""
URL configuration for website project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, re_path
from django.contrib.auth.views import LoginView, LogoutView

from .views import landing, login, signup, welcome

urlpatterns = [
    re_path(r'^landing$', landing, name="user_landing"), 
    re_path(r'^login/$', LoginView.as_view(template_name='user/login_index.html'), name="user_login"),
    re_path(r'^logout/$', LogoutView.as_view(), name="user_logout"),
    re_path(r'^signup/$', signup, name="user_signup"),
    re_path(r'^$', welcome, name="checklist_welcome"),

    # re_path(r'^login$', 
    #         LoginView.as_view(template_name='login/index.html'), 
    #         name='users_login'),
    # re_path(r'^logout$', 
    #         LogoutView.as_view(), 
    #         name='users_logout'),
]