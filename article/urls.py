from django.conf.urls import url

from . import views

#中转调用
urlpatterns = [
    #返回全部
    url(r'^$', views.home, name='home'),

    # 单条详情
    url(r'^(?P<id>\d+)/$',views.detail,name='detail'),

    # url(r'^(?P<my_args>\d+)/$',views.detail,name='detail'),
    # url(r'^test/$',views.test,name='test'),
]