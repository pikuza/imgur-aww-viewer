from django.conf.urls import url
from django.conf.urls import patterns

from .views import IndexView, DetailView

urlpatterns = patterns('',

    url(r'^(?P<image_id>\w+)/$', DetailView.as_view(), name='detail'),
    url(r'^$', IndexView.as_view(), name='index'),

)
