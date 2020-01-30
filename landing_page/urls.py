from . import views
from django.conf.urls import url


urlpatterns = [
    url(r'^$', views.index, name='index'),
    url(r'^beranda$', views.beranda , name='beranda'),
    url(r'^profile$', views.profile , name='profile'),
    url(r'^portfolio$', views.portfolio , name='portfolio'),

    url(r'^profile/detail/(?P<id>\d+)$', views.detail_profile , name='detail_profile'),


    url(r'^blogs$', views.blogs , name='blogs'),

    url(r'^blog/readmore/(?P<id>\d+)$', views.readmore , name='readmore'),
]