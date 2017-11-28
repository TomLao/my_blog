"""my_blog URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""

#url设置相当于客户端向服务器发出request请求的入口, 并用来指明要调用的程序逻辑

from django.conf.urls import url,include
from django.contrib import admin

urlpatterns = [
    url(r'^admin/', admin.site.urls),

    #按照文档的firstapp，这里需要article中建一个urls.py来中转调用，输出全部
    url(r'', include('article.urls')),

    #单条详情
    # url()
    # url(r'^test/$', include("article.urls"),name='test'),
    # url(r'^$', include('article.views.home')),
    # url(r'',include('article.urls',namespace='article'))
]
