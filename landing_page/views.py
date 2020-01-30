from django.shortcuts import render
# from django.conf.urls
# Create your views here.
def index(request):
    return render(request,'landing/index.html')

def beranda(request):
    return render(request,'landing/beranda.html')

def profile(request):
    return render(request,'landing/profile.html')

def portfolio(request):
    return render(request,'landing/portfolio.html')

def blogs(request):
    return render(request,'landing/blogs.html')


def detail_profile(request,id):
    # datacontentlink = ContentLink.objects.get(id=id)
    context = {'Id': id }
    return render(request, 'landing/detail_profile.html',context)
    

def readmore(request,id):
    context = {'Id': id }
    return render(request, 'landing/readmore.html',context) 

