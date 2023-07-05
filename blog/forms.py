# from django import forms

# class FileForm(forms.Form):
#     file = forms.FileField()

from django import forms
from .models import File

class FileForm(forms.ModelForm):
    class Meta:
        model = File
        fields = ['file']
