from django.conf.urls import url

from . import views

#中转调用
urlpatterns = [
    url(r'^$', views.home, name='home'),
    # url(r'^(?P<my_args>\d+)/$',views.detail,name='detail'),
    # url(r'^test/$',views.test,name='test'),
]