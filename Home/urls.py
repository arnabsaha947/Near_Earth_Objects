from django.contrib import admin
from django.urls import path,include
from . import views

urlpatterns = [
    path('' , views.HomeBase , name="HomeBase"),
    path('Home' , views.Home , name="Home"),
    path('astroids' , include('Astroids.urls')),
    path('nearest' , include('Nearest.urls')),
    path('fastest' , include('Fastest.urls')),
]