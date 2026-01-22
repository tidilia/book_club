from django.urls import path
from .views import GenreList, BookList, MeetingList, RegistrationCreate

urlpatterns = [
    path('genres/', GenreList.as_view(), name='genres-list'),
    path('books/', BookList.as_view(), name='books-list'),
    path('meetings/', MeetingList.as_view(), name='meetings-list'),
    path('registrations/', RegistrationCreate.as_view(), name='registrations-create')
]
