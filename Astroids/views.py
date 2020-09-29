from django.shortcuts import render

# Create your views here.
def astroids(request):
    return render(request,"Astroids.html")