from django.shortcuts import render
from rest_framework import generics
from .models import Genre, Book, Meeting, Registration
from .serializers import GenreSerializer, BookSerializer, MeetingSerializer, RegistrationSerializer

class GenreList(generics.ListAPIView):
    queryset = Genre.objects.all()
    
    serializer_class = GenreSerializer
    
class BookList(generics.ListAPIView):
    serializer_class = BookSerializer
    
    def get_queryset(self):
        genre_id = self.request.query_params.get('genre')
        return Book.objects.filter(meetings__genre_id=genre_id).distinct()
    
class MeetingList(generics.ListAPIView):
    serializer_class = MeetingSerializer
    
    def get_queryset(self):
        book_id = self.request.query_params.get('book')
        return Meeting.objects.filter(book_id=book_id).distinct()

class RegistrationCreate(generics.CreateAPIView):
    queryset = Registration.objects.all()
    serializer_class = RegistrationSerializer
# Create your views here.
