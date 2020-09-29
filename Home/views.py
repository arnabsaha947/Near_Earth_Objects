from django.shortcuts import render

# Create your views here.
def HomeBase(request):
    return render(request,"HomeBase.html")

def Home(request):
    return render(request,"Home.html")