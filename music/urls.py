from django.conf.urls import url
from . import views 

urlpatterns = [
    # url(r'^$', views.index, name='index'),
    url(r'^music$', views.index , name='index'),

    # url(r'^music/edit/(?P<pk>\d+)$', views.edit, name='edit'),
    url(r'^music/edit/(?P<pk>\d+)$', views.edit, name='edit'),

    url(r'^music/delete/(?P<pk>\d+)$', views.delete, name='delete')

]
