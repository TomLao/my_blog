from django.contrib import admin
from article.models import Article

#添加后台markdown视图http://127.0.0.1:8000/admin/article/article/4/change/
from pagedown.widgets import AdminPagedownWidget
from django import forms
# Define your form here.
class ArticleForm(forms.ModelForm):
    content = forms.CharField(widget=AdminPagedownWidget())
    class Meta:
        model = Article
        fields = '__all__'
class ArticleAdmin(admin.ModelAdmin):
    form = ArticleForm
#结束

# Register your models here.

admin.site.register(Article,ArticleAdmin)   #ArticleAdmin为后台md视图