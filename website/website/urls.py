from django.contrib import admin
from django.urls import include, re_path
from django.contrib.auth.views import LoginView, LogoutView

from .views import default
# from .views import landing

urlpatterns = [
    re_path(r'^admin/', admin.site.urls),
    re_path(r"^$", default, name="default"),
    re_path(r"^user/", include("users.urls")),
    # re_path(r"^landing$", landing, name="landing"),
]
