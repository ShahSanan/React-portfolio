# forms.py
from django import forms
from .models import Contact

from django import forms

class ContactForm(forms.Form):
    name = forms.CharField(max_length=100)
    email = forms.EmailField()
    phone = forms.CharField(max_length=15)
    description = forms.CharField(widget=forms.Textarea)