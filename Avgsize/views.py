from django.shortcuts import render
import json
import requests
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse, JsonResponse

# Create your views here.
def avgsize(request):
    return render(request,"Avgsize.html")

@csrf_exempt
def avgpython(request):
    jlist=[]
    data = json.loads(request.body)
    startdate = data['startdate']
    enddate = data['enddate']
    apikey = '61Nw3wKn5qW3shDiFDETu04NGbdJEOLhQXTa2ssQ'
    url = 'https://api.nasa.gov/neo/rest/v1/feed?start_date='+( startdate )+'&end_date='+( enddate )+'&api_key='+( apikey )
    parameters = {'start_date':startdate , 'enddate':enddate , 'api_key':apikey}
    
    response = requests.get(url)
    #print(response.json())
    return JsonResponse({'response':response.json()})
    
