from django.contrib import admin
from django.urls import path,include
from Avgsize import views as av
from Astroids import views as asv
from Nearest import views as nv
from Fastest import views as fv
from . import views

urlpatterns = [
    path('' , views.HomeBase , name="HomeBase"),
    path('Home' , views.Home , name="Home"),
    path('astroids', asv.astroids, name="NumOfAstroidsLanding"),
    path('astroidspython', asv.astroidspython, name="astroidspython"),
    path('nearest', nv.nearest, name="NearestLanding"),
    path('nearestpython', nv.nearestpython, name="nearestpython"),
    path('fastest', fv.Fastest, name="FastestLanding"),
    path('fastestpython', fv.fastestpython, name="fastestpython"),
    path('avgsize' , av.avgsize, name="avgsize"),
    path('avgpython' , av.avgpython, name="averagesizePython"),
]