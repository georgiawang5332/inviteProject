from django.urls import path
from . import views

app_name = "inviteApp"

urlpatterns = [
    # dashboard
    path('', views.index, name='index'),

]
