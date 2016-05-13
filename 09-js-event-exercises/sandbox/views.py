from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def show(request):
    return render(request, 'sandbox/show.html')

def ajax_respond(request):
    print(request)
    return HttpResponse('response!')
