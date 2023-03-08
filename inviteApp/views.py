from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    template_name = 'index.html'
    context = {
        "title": '首頁 Dashboard',
    }
    # return HttpResponse("hello world!!!")
    return render(request, template_name, context)
