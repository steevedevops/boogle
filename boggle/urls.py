"""boggle URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path


from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls import include, url
from django.views.static import serve
from django.views.decorators.csrf import csrf_exempt
import os
from django.views.generic.base import RedirectView


favicon_view = RedirectView.as_view(url=os.path.join(settings.STATIC_URL,'favicon.ico'), permanent=True)

urlpatterns = [
    path('favicon.ico', favicon_view),
    path('', TemplateView.as_view(template_name='index.html')),
    path('admin/', admin.site.urls),

    #DJANGO folders
    url(r'^static/(?P<path>.*)$', serve,
        {'document_root': settings.STATIC_ROOT}),
    url(r'^dmedia/(?P<path>.*)$', serve,
        {'document_root': settings.MEDIA_ROOT}),

    #Vue.js folders
    url(r'^media/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'media')}),
    url(r'^img/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'img')}),
    url(r'^js/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'js')}),
    url(r'^css/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'css')}),
    url(r'^fonts/(?P<path>.*)$', serve,
        {'document_root': os.path.join(settings.VUE_ROOT, 'fonts')}),
]
