from django.shortcuts import render
from django.http import HttpResponse
from article.models import Article
from datetime import datetime
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
    post_list=Article.objects.all() #获取全部的Article对象
    return render(request, 'home.html',{'post_list':post_list})