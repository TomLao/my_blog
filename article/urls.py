from django.conf.urls import url

from . import views

#中转调用
urlpatterns = [
    #返回全部
    url(r'^$', views.home, name='home'),

    # 单条详情
    url(r'^(?P<id>\d+)/$',views.detail,name='detail'),

    #获取链接给手风琴用
    url(r'^(?P<id>\d+)$',views.detail,name='detail_id'),

    #归档
    url(r'^archives/$', views.archives, name = 'archives'),

    # 标签检索
    url(r'^tag(?P<tag>\w+)/$', views.search_tag, name = 'search_tag'),

    # 搜索
    url(r'^search/$',views.blog_search, name = 'search'),

    # url(r'^(?P<my_args>\d+)/$',views.detail,name='detail'),
    # url(r'^test/$',views.test,name='test'),
]