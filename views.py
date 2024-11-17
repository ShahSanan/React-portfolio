from django.shortcuts import render, HttpResponse

# Create your views here.
def home(request):
    return render(request, 'home.html')
def about(request):
    return render(request, 'about.html')
def projects(request):
    return render(request, 'projects.html')
def contact(request):
    return render(request, 'contact.html')
from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import Contact

# views.py
from django.core.mail import send_mail
from django.shortcuts import render
from django.http import HttpResponse
from .models import Contact  # Assuming you have a ContactForm class
from django.core.mail import send_mail
from .forms import ContactForm 

def contact(request):
   
     if request.method == 'POST':
        name = request.POST.get('name')
        email = request.POST.get('email')
        phone = request.POST.get('phone')
        description = request.POST.get('description')
        contact = Contact(name=name, email=email, phone=phone, description=description)
        contact.save()
     return render(request, 'contact.html', {})

   