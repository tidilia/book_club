from django.contrib import admin
from .models import Genre, Book, Meeting, MeetingType

admin.site.register(Genre)
admin.site.register(Book)
admin.site.register(Meeting)
admin.site.register(MeetingType)


# Register your models here.
