
from django.contrib import admin
from django.urls import path, include

from meetings import urls as meeting_urls

urlpatterns = [
    path('api/', include(meeting_urls)),
    path('admin/', admin.site.urls),
]
