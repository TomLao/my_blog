# -*- coding: utf-8 -*-
from django.shortcuts import render
from django.http import HttpResponse
from article.models import Article
from datetime import datetime
from django.http import Http404
from django.core.paginator import Paginator, EmptyPage, PageNotAnInteger #添加包，分页

#views用来处理程序逻辑, 然后呈现到template(一般为GET方法, POST方法略有不同)

# Create your views here.
# def home(request):
#     return HttpResponse("hello World, heze")
#
# #写来玩的，输入什么就在网页上输出内容
# def detail(request, my_args):
#     # post=Article.objects.all()[int(my_args)]
#     # str=("title=%s, category=%s, date_time=%s, content=%s"
#     #      % (post.title, post.category, post.date_time, post.content))
#     return HttpResponse("You're looking at my_args %s ." % my_args)
#     # return HttpResponse(str)
#
# #render()函数中第一个参数是request 对象, 第二个参数是一个模板名称，
# # 第三个是一个字典类型的可选参数. 它将返回一个包含有给定模板根据给定的上下文渲染结果的 HttpResponse对象
# def test(request):
#     return render(request, 'test.html', {'current_time': datetime.now()})

def home(request):
    posts=Article.objects.all() #获取全部的Article对象
    paginator=Paginator(posts,5) #每页显示5个,一下主要修改主页上的显示，分页不要显示全部文章
    page=request.GET.get('page')
    try:
        post_list=paginator.page(page)
    except PageNotAnInteger:
        post_list=paginator.page(1)
    except EmptyPage:
        post_list=paginator.paginator(paginator.num_pages)
    return render(request, 'home.html',{'post_list':post_list})

#单条查找，id是博文的唯一标识，用id对数据库查找
def detail(request, id):
    try:
        post=Article.objects.get(id=str(id))
    except Article.DoesNotExist:
        raise Http404
    return render(request,'post.html',{'post':post})
